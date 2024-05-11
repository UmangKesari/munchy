import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null); moving it to custom hook

  /**
   * Restaurant menu has two has resposibility - fetch data and display on UI.
   * So, using custom hooks , abstracted out the logic of fetching data.
   */

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  //console.log(resInfo?.cards[2]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //filter out item category card
  const itemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* Categories accordian .. For each category, there will be accordian item*/}

      {itemCategories.map((category) => <RestaurantCategory data={category?.card?.card}/> )}

    </div>
  );
};

export default RestaurantMenu;
