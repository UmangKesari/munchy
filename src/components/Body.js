import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    // this is how we render dynamic data
                    resList.map((restaurant, index) => {
                        console.log(index + " Im here" + restaurant.data.address)
                        return <RestaurantCard key={restaurant.id} resData={restaurant} />
                    })}
                
            </div>
        </div>
    );
}

export default Body;