import { Link } from "react-router-dom";

function Product() {

  const products = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Phone", price: "$800" },
    { id: 3, name: "Camera", price: "$900" },
    { id: 4, name: "AirPods", price: "$200" },
    { id: 5, name: "Power Bank", price: "$60" },
  ];

  return (
    <>
      <h1>Products</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
         

          <Link to={`/product/${item.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </>
  );
}

export default Product;