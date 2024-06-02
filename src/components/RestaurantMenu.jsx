import {
  RES_ID_URL,
  RES_INFO_KEY,
  RES_MENU_LIST_KEY,
} from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
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
    const resInfoObj = resInfoNestedObj.card.card.info;

    // Query for RES_MENU_ITEMS
    const groupedCardObj = fetchedJson.data.cards.filter((e) => e?.groupedCard);
    // console.log("groupedCardObj:", groupedCardObj)
    const resMenuCategoryObj =
      groupedCardObj[0].groupedCard?.cardGroupMap?.REGULAR.cards.find(
        (ele) => ele.card.card["@type"] === RES_MENU_LIST_KEY
      );

    const resItemCardsArr = resMenuCategoryObj.card.card.itemCards;

    setResInfo({ ...resInfoObj });
    setMenuItems([...resItemCardsArr]);
  };

  console.log("resInfo", resInfo);
  console.log("menuItems>", menuItems)

  return (
    <div className="res-menu-container">
      <h1>{resInfo.name}</h1>
      <h3>{resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
