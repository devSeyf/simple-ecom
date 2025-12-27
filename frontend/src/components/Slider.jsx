import React from "react";
import './Slider.css'
export default function Slider() {
  return ( 
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop" 
            className="d-block w-100 height-300"
            
            alt="Online Shopping" 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Summer Sale Up to 50% Off</h5>
            <p>Shop the latest fashion trends</p>
          </div>
        </div>
        <div className="carousel-item">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop" 
            className="d-block w-100 height-300" 
            alt="Electronics" 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>New Tech Gadgets</h5>
            <p>Latest electronics at best prices</p>
          </div>
        </div>
        <div className="carousel-item">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" 
            className="d-block w-100 height-300" 
            alt="Home Decor" 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Home & Living</h5>
            <p>Refresh your living space</p>
          </div>
        </div>
      </div>
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}