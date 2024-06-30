"use client";

import { parseISO, format } from "date-fns";
import { useEffect } from "react";

export default function Date({ dateString }) {
  useEffect(() => {
    console.log("calling our app on component mount");
    fetch("http://localhost:3000/api/hello").then(async (res) => {
      console.log("got response", await res.json());
    });
  }, []);

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
