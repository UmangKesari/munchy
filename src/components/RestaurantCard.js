import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    //console.log(props);
    //const {resData, cuisine} = props; // destructuring
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
            <img 
                className="rounded-md"
                alt="res-image"
                src={CDN_URL+cloudinaryImageId}/>
            
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4> {costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>

            
        </div>
    );
};

export default RestaurantCard;