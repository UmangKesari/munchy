import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

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
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            //filter logic for rating > 4.5
            let filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            console.log(filteredList);
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
          listOfRestaurants.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          })
        }
      </div>
    </div>
  );
};

export default Body;
