export default function Product({ item }) {
  return (
    <div className="card h-100 p-2">
      <img
        className="card-img-top"
        src={item.image}
        alt={item.title}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description.slice(0, 60)}...</p>
        <p className="fw-bold">{item.price}$</p>
        <button className="btn btn-primary">Buy</button>
      </div>
    </div>
  );
}
