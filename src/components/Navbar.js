import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <nav>
      <div className="p-8">
        <Link to="/">
          <p className="font-semibold text-[26px] text-white cursor-pointer">
            Shopify
          </p>
        </Link>
      </div>
      <div className="items-center flex justify-between p-8">
        <Link className="flex items-center justify-center" to="/cart">
          <div className="cart-icon">
            <AiOutlineShoppingCart />
          </div>
          <p className="font-medium text-[18px] text-white cursor-pointer">
            My Cart
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
