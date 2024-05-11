import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  console.log(data);

  const [showItems, setShowItems] = useState(false);

  const handleCLick = () => {
    setShowItems(!showItems);

  }

  return (
    <div>
      <div className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleCLick}>
          <span className="font-bold">
            {data.title} ({data?.itemCards.length})
          </span>
            {showItems ? <span className="font-bold text-md">Λ</span>:<span className="font-bold text-md">V</span> }
          
        </div>
        
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* <div>Restaurant category</div>  */}
      {/* {Accorddian body} */}
    </div>
  );
};

export default RestaurantCategory;
