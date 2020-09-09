import React from "react";
import "../assets/css/Header.css";
import Logo from "../assets/images/amazon_logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* img child*/}
      <Link to="/">
        <img className="header__logo" src={Logo} alt="amazon__logo" />
      </Link>

      {/* Search child */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* logo */}
        <SearchIcon />
      </div>

      {/* right nav child */}
      <div className="header__nav">
        {/* sub child 1 */}
        <div className="header__option">
          <span className="header__optionLineOne">Hello Shakti</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        {/* sub child 2*/}
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo"> &amp; Orders</span>
        </div>
        {/* sub child 3 */}
        <div className="header__option">
          <span className="header__optionLineOne">Yours</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
