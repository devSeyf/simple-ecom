
import { Routes, Route } from 'react-router-dom';
import './App.css'
import About from "./components/About"
import Home from "./components/Home"
import Categories from "./components/Categories"
import ProductDetails from "./components/ProductDetails"

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<Categories />} />
          <Route path="product/:productId/" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App