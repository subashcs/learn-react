const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// POST: Create a new product
app.post("/products", (req, res) => {
  const { name, description, price, quantity } = req.body;

  if (!name) {
    res.status(400).send({ message: "Invalid request data" });
  }

  db.run(
    `INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)`,
    [name, description, price, quantity],
    function (err) {
      if (err) {
        return console.log(err.message);
      }
      res.status(201).send({ id: this.lastID });
    }
  );
});

// GET: Retrieve all products
app.get("/products", (req, res) => {
  const searchKey = req.query.searchKey || "";

  // Escape user input to prevent SQL injection
  const sanitizedSearchKey = `%${searchKey
    .replace(/%/g, "\\%")
    .replace(/_/g, "\\_")}%`;

  db.all(
    `SELECT * FROM products WHERE name LIKE ? ESCAPE '\\'`,
    [sanitizedSearchKey],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(rows);
    }
  );
});

// GET: Retrieve a single product by id
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  db.get(`SELECT * FROM products WHERE id = ?`, [id], (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).json(row);
  });
});

// PUT: Update a product
app.put("/products/:id", (req, res) => {
  const { name, description, price, quantity } = req.body;
  const id = req.params.id;
  db.run(
    `UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE id = ?`,
    [name, description, price, quantity, id],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      res.status(200).send({ message: "Product Updated!" });
    }
  );
});

// DELETE: Delete a product
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM products WHERE id = ?`, id, function (err) {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).send({ message: "Product Deleted!" });
  });
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
