


import {useParams} from "react-router-dom"


export default function ProductDetails () {
    const Params= useParams ()

    return (<>
    <h1>ProductDetails  is : {Params.productId }</h1>
    
    </>)
}