import { RES_MENU_MAIN_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuItems } = useRestaurantMenu(resId);

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
            <h4>Recommended</h4>
            <p>{menuItems.length} Items</p>
          </div>

          {menuItems.map((e) => (
            <div className="res-menu-dish-details-wrapper">
              <div className="res-menu-dish-details">
                <h4>{e.card.info.name}</h4>
                <h5>Rs. {Math.round(e.card.info.price / 100)} </h5>
                <p>{e.card.info.description}</p>
              </div>
              <div className="res-menu-main-img">
                <img src={RES_MENU_MAIN_IMG_URL + e.card.info.imageId} alt="" />
                <button className="btn">ADD</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
