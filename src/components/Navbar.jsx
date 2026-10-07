import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h2>My Website</h2>
       <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>

      <Link to="/login">Login</Link>
<Link to="/product">Product</Link>    
</nav>
  );
}

export default Navbar;