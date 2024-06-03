import {
  RES_ID_URL,
  RES_INFO_KEY,
  RES_MENU_LIST_KEY,
  RES_MENU_NESTED_LIST_KEY,
  RES_MENU_MAIN_IMG_URL,
} from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState({});
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchRawData = await fetch(RES_ID_URL + resId);
    const fetchedJson = await fetchRawData.json();

    // Query for RES_INFO
    const resInfoNestedObj = fetchedJson.data.cards.find(
      (ele) => ele?.card?.card?.["@type"] === RES_INFO_KEY
    );
    const resInfoObj = resInfoNestedObj.card.card?.info;

    // Query for RES_MENU_ITEMS
    const groupedCardObj = fetchedJson.data.cards.filter((e) => e?.groupedCard);
    // console.log("groupedCardObj:", groupedCardObj)
    const resMenuCategoryObj =
      groupedCardObj[0].groupedCard?.cardGroupMap?.REGULAR.cards.find((ele) => {
        if (ele.card.card["@type"] === RES_MENU_LIST_KEY) {
          return ele;
        } else if (ele.card.card["@type"] === RES_MENU_NESTED_LIST_KEY) {
          return ele;
        }
      });

    console.log("resMenuCategoryObj:", resMenuCategoryObj);
    // const resItemCardsArr = resMenuCategoryObj?.card?.card?.itemCards;
    let resItemCardsArr = null;
    if (resMenuCategoryObj.card.card.itemCards) {
      resItemCardsArr = resMenuCategoryObj.card.card.itemCards;
    } else if (resMenuCategoryObj.card.card.categories[0].itemCards) {
      resItemCardsArr = resMenuCategoryObj.card.card.categories[0].itemCards;
    }

    // setResInfo({ ...resInfoObj });
    setResInfo(resInfoObj);
    setMenuItems([...resItemCardsArr]);
    // console.log("resInfo", resInfo);
    // console.log("menuItems>", menuItems);
  };

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
