
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from "./components/Navbar"   
import Slider from "./components/Slider"   
import ProductsList from "./components/ProductsList"   
import About from "./components/About"   

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

       
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <ProductsList />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        

      </div>
    </>
  )
}

export default App