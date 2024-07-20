import { RES_MENU_MAIN_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuCategories } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // console.log("menuCategories", menuCategories)

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="res-menu-container">
      <div className="res-menu-header-container">
        <div className="res-menu-header">
          <div className="res-menu-main-img">
            <img
              src={RES_MENU_MAIN_IMG_URL + resInfo.cloudinaryImageId}
              alt="RES_MENU_MAIN_IMG"
            />
          </div>
          <div className="res-menu-info">
            <h1>{resInfo.name}</h1>
            <h4>{resInfo.cuisines.join(", ")}</h4>
            <p>
              <span className="res-rating">⭐ {resInfo.avgRating}</span> |{" "}
              {resInfo.sla?.slaString ||
                resInfo.sla?.deliveryTime ||
                resInfo.sla?.maxDeliveryTime}{" "}
              | {resInfo.costForTwoMessage}
            </p>
          </div>
        </div>
      </div>

      <div className="res-menu-body-container">
        <div className="res-menu-body">
          <div className="res-menu-recommended">
            {menuCategories.map((category, index) => (
              <RestaurantCategory
                key={index}
                singleCategory={category?.card?.card}
                showItems={index === showIndex ? true : false}
                modShowIndexFunc={() => setShowIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
