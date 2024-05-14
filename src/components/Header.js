import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const  data = useContext(UserContext);
  console.log(data);
  
  const onlineStatus = useOnlineStatus();
  //let btnName = "login";
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container">
        <img src="./images/logo1.jpg" className="w-56"></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status : {onlineStatus ? "yes" : "No"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>

          <button className="login" onClick={() => {
            btnName =="Login" ? setBtnName("Logout"): setBtnName("Login");
            }}>{btnName}</button>

        <li className="px-4 font-bold">{data.loggedInUser}</li>  
        </ul>
      </div>
    </div>
  );
};

export default Header;