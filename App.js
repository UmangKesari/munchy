import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () => {
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
                </ul>

            </div>


        </div>
    )
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-image"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bjxjlpnd47zoaq4lsmud"/>
            <h3>Rolls king</h3>
            <h4>Biryani, Rice, north Indian</h4>
            <h4>4.5 rating</h4>
            <h4>30 minutes</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                // Restaurant card
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (<div className="app">
            <Header/>
            <Body />
    </div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

