import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$1200",
      description: "High performance laptop"
    },
    {
      id: 2,
      name: "Phone",
      price: "$800",
      description: "Latest Android phone"
    },
    {
      id: 3,
      name: "Camera",
      price: "$900",
      description: "Professional DSLR camera"
    },
    {
      id: 4,
      name: "AirPods",
      price: "$200",
      description: "Wireless earbuds"
    },
    {
      id: 5,
      name: "Power Bank",
      price: "$60",
      description: "10000mAh Fast Charging"
    }
  ];

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <h1>Product Detail</h1>

      <h2>{product.name}</h2>

      <p>Price: {product.price}</p>

      <p>{product.description}</p>

      <Link to="/product">
        Back to Products
      </Link>
    </>
  );
}

export default ProductDetail;