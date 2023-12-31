import React from "react";
import "./Header.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />

        <SearchSharpIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "./login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>

            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>

          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>

          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasketSharpIcon />
          </Link>

          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
