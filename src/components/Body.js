import RestaurantCard, { withDiscountInfo } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

import useOnlineStatus from "../utils/useOnlineStatus";

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

  const RestaurantCardDiscounted = withDiscountInfo(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

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

  const onlineStatus = useOnlineStatus();

  function isNonEmptyAggregatedDiscount(obj) {
    return (
      obj?.info.hasOwnProperty("aggregatedDiscountInfoV3") &&
      Object.keys(obj?.info?.aggregatedDiscountInfoV3).length > 0
    );
  }

  if (onlineStatus === false) {
    return <h1>You're off line. Please check your internet connection</h1>;
  }
  //conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  console.log(listOfRestaurants);
  return (
    <div className="body">
      <div className="flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-1 m-4 bg-green-600 rounded-md"
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
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-5 py-1 m-4 bg-gray-400 rounded-md"
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
        <div className="p-4 m-4 flex items-center">
          <span>Username: </span>
          <input
            type="text"
            className="m-2 border border-black"
            value={loggedInUser}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {
          // this is how we render dynamic data
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* Based on Discount info, corresponding card would be generated */}
              {
                //console.log(restaurant && restaurant.info && restaurant.info.aggregatedDiscountInfoV3)
                //console.log(Object.keys(restaurant?.info?.aggregatedDiscountInfoV3))
              }
              {isNonEmptyAggregatedDiscount(restaurant) ? (
                <RestaurantCardDiscounted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
