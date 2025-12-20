import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Product from "./Product"
export default function ProductDetails() {
    const Params = useParams()
    const api_url = "https://fakestoreapi.com/products"
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`${api_url}/${Params.productId} `).then((res) => res.json()).then((product) => setProduct(product))
    }, [])

    return (<>
        <Product item={product} showButton={false} />
    </>)
}

