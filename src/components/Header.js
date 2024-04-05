import { useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  //let btnName = "login";
  return (
    <div className="header">
      <div className="logo-container">
        <img src="./images/logo1.jpg" alt="logo"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>

          <button className="login" onClick={() => {
            btnName =="Login" ? setBtnName("Logout"): setBtnName("Login");
            }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;