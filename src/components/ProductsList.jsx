import { useEffect, useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";



export default function ProductsList() {
  const [data, setData] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function load() {
      const res = await fetch(api_url);
      const json = await res.json();
      setData(json);
    }
    load();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>

      <div className="container">
        <div className="row">

          {data.map((product) => (
            <div className="col-3" key={product.id}>
              <Product item={product} />
             
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
