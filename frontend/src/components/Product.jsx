import {Link,NavLink} from "react-router-dom";
export default function Product({ item , showButton }) {
  return (
    <div className="card h-100 p-2">
      <img
        className="card-img-top"
        src={item.image}
        alt={item.title}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body">
        <h5 className="card-title">{item.title.slice(0,15) }</h5>
        {/*<p className="card-text">{item.description.slice(0,10) }...</p>*/}
        <p className="fw-bold">{item.price}$</p>
    {showButton && (
  <Link to={`/product/${item.id}`} className="btn btn-primary">Buy</Link>
)}

      </div>
    </div>
  );
}
