import { useEffect, useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
export default function ProductsList() {
  const [data, setData] = useState([]);
  const [categories, setCategory] = useState([]);
  const api_url = "https://fakestoreapi.com/products";
  const api_url_category = "https://fakestoreapi.com/products/categories";


  const getProducts = () => {
    fetch(api_url)
      .then(response => response.json())
      .then(data => setData(data));

  }


  const getCategories = () => {
    fetch(api_url_category)
      .then(response => response.json())
      .then(categories => setCategory(categories));

 }

    const getSpecificCategories = (n) => {
      fetch(`${api_url}/category/${n} `)
        .then(response => response.json())
        .then((data)=> setData(data));


    }
    useEffect(() => {
      getProducts()
      getCategories()

    }, []);

    return (
      <>
        <h2 className="text-center p-3">Our Products</h2>

        <div className="container">

          {
            categories.map((i) => {
              return <button key={i} onClick={() => {
                getSpecificCategories(i)
              }} className="btn btn-dark p-2 m-1 " >{i} </button>
            })
          }




          <div className="row">

            {data.map((product) => (
              <div className="col-3" key={product.id}>
                <Product item={product} showButton={true} />

              </div>
            ))}

          </div>
        </div>
      </>
    );
  }