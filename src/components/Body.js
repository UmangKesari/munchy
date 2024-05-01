import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // let [listOfRestaurants, setListOfRestaurants] = useState([
  //   {
  //     data: {
  //       id: "121603",
  //       resName: "Kannur Food Point",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "428",
  //       resName: "Biryani Pot",
  //       cloudinaryImageId: "mdipoyzfzsa7n7igskht",
  //       cuisines: ["North Indian", "Biryani"],
  //       costForTwo: 50000,
  //       deliveryTime: 24,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "229",
  //       resName: "Meghana Foods",
  //       cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
  //       cuisines: [
  //         "Biryani",
  //         "Andhra",
  //         "South Indian",
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //       ],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "3.8",
  //     },
  //   },
  // ]);

  //let listOfRestaurantsJS = [];
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData(); // callback fun
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    //console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  //conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              //console.log(e.target.value);
              //console.log(e);
            }}
          />
          <button
            onClick={() => {
              //
              console.log(searchText);
              const filterRes = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            //filter logic for rating > 4.5
            let filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            //console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
          //onMouseOver={() => console.log("move over")}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {
          // this is how we render dynamic data
          filteredRestaurant.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
