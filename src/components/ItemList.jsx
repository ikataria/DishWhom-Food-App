import {RES_MENU_MAIN_IMG_URL} from "../utils/constants"

const ItemList = (props) => {
  const { categoryItems } = props;

  return (
    <div>
      {categoryItems.map((category) => (
            <div className="res-menu-recommended res-menu-dish-details-wrapper border-b-2 gray-black pb-3">
              <div className="res-menu-dish-details">
                <p className="font-semibold text-xl">{category?.card?.info?.name || category?.itemCards[0].card?.info?.name}</p>
                <h5 className="font-semibold">₹ {Math.round((category?.card?.info?.price || category?.card?.info?.defaultPrice) / 100) || (category?.itemCards?.[0].card?.info?.price || category?.itemCards?.[0].card?.info?.defaultPrice)/100} </h5>
                <span className="my-2 font-semibold text-xs">⭐{category?.card?.info?.ratings?.aggregatedRating?.rating || category?.itemCards?.[0].card?.info?.ratings?.aggregatedRating?.rating || "4.5"}{" "}</span>
                <span className="my-2 font-extralight text-xs">({category?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || category?.itemCards?.[0].card?.info?.ratings?.aggregatedRating?.ratingCountV2 || "65"})</span>
                
                <p>{category?.card?.info?.description || category?.itemCards?.[0].card?.info?.description}</p>
              </div>
              <div className="res-menu-main-img">
                <img src={RES_MENU_MAIN_IMG_URL + (category?.card?.info?.imageId || category?.itemCards?.[0].card?.info?.imageId)} alt="" />
                <button className="btn">ADD</button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ItemList;
