
import { Routes, Route  } from 'react-router-dom';
import About from "../../components/About"
import Home from "../../components/Home"
import Categories from "../../components/Categories"
import ProductDetails from "../../components/ProductDetails"
import Dashboard from "../../components/Page/Dashboard"

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