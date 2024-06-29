# TASK OLD
Task for this session.

## Fetch Data from API
1. Run the `inventory-api` api using command `npm run start`
2. Run the `store-management` frontend using command `npm run dev`
3. Analyze the frontend project structure
4. Complete the useEffect hook logic inside [ProductList.jsx](./store-management/src/components/ProductList.jsx). You will update the logic to fetch products from our API and set the output to `products` state variable.
   
## Make search workable
In this task you will learn about dependencies in the useEffect hook.


# Day 13

1. Complete the code for delete product in [ProductList Component](./store-management/src/components/ProductList.jsx). After the product is updated you should not use `window.location.reload()`. Instead update the [store](./store-management/src/contexts/StoreContext.jsx). 
You will see the following section in the ProductList component. 

```javascript
  const handleDelete = useCallback(async (id) => {
    try {
      const url = getDeleteURL(id); //productID // find issue and complete
      const response = await axios.delete(url);
      if (response.status === 200) {
        // TASK: on success remove item from store
        // do not reload using window.location
        // hint create and use DELETE_PRODUCT action
        window.location.reload();
      } else {
        console.error(`Could not delete item ${id}`);
      }
    } catch (err) {
      console.error(err?.message);
      // TODO: Display toast on error
    }
  }, []);
```

1. Observer the routing logic in `store-management` app.
Try navigating different links in header.



