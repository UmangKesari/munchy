import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-500 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-gray-700">
                {item.card.info.name}
              </span>
              <span> | ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 pl-6">
            <img src={CDN_URL + item.card.info?.imageId} className="w-full" />
            <button className="p-2 bg-white text-green-500 shadow-lg font-bold rounded-xl border border-green-500 hover:bg-gray-200 text-center">ADD + </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
