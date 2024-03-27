import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    console.log(props);
    //const {resData, cuisine} = props; // destructuring
    const { resData } = props;
    console.log(resData);
    const { resName, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-image"
                src={CDN_URL+cloudinaryImageId}/>
            
            <h3>{resName}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4> {costForTwo/100} For TWO</h4>
            <h4>{deliveryTime} minutes</h4>

            
        </div>
    );
};

export default RestaurantCard;