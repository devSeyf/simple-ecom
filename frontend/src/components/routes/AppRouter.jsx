
import { Routes, Route  } from 'react-router-dom';
import About from "../About"
import Home from "../Home"
import Categories from "../Categories"
import ProductDetails from "../ProductDetails"
import Dashboard from "../Page/Dashboard"

export default function AppRouter(){
    return (
        <>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="product/:productId/" element={<ProductDetails />} />
        </Routes>
        </>
    )
}