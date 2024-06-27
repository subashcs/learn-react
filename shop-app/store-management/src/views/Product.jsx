import { useParams, useSearchParams } from "react-router-dom";

export const Product = () => {
  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("route params", params);
  console.log("search params", searchParams);

  return <div>Product</div>;
};
