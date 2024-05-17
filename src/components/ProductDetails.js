import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";

function ProductDetails() {
  const params = useParams();
  console.log(params);

  const prodURL = "https://fakestoreapi.com/products/";
  const [product, setProduct] = useState({});

  const y3m = params.productID;
  useEffect(() => {
    fetch(`${prodURL}${params.productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return <Product product={product} show_button={false} />;
}

export default ProductDetails;
