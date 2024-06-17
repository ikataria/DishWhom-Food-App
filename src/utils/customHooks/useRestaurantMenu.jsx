import {
    RES_ID_URL,
    RES_INFO_KEY,
    RES_MENU_LIST_KEY,
    RES_MENU_NESTED_LIST_KEY
} from "../constants";
import { useEffect, useState } from "react";

const RestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchRawData = await fetch(RES_ID_URL + resId);
    const fetchedJson = await fetchRawData.json();

    const menuCardsArr = fetchedJson.data.cards;

    // console.log("menuCardsArr", menuCardsArr)

    // Query for RES_INFO
    const resInfoNestedObj = menuCardsArr.find(
      (ele) => ele?.card?.card?.["@type"] === RES_INFO_KEY
    );
    const resInfoObj = resInfoNestedObj.card.card?.info;

    // Query for RES_MENU_ITEMS
    const groupedCardObj = menuCardsArr.filter((e) => e?.groupedCard);
  
    // const resMenuCategoryObj = groupedCardObj[0].groupedCard?.cardGroupMap?.REGULAR.cards.find((ele) => {
    //     if (ele.card.card["@type"] === RES_MENU_LIST_KEY) {
    //       return ele;
    //     } else if (ele.card.card["@type"] === RES_MENU_NESTED_LIST_KEY) {
    //       return ele;
    //     }
    //   });

    const resMenuCategoryArr = groupedCardObj[0].groupedCard?.cardGroupMap?.REGULAR.cards.filter((ele) => {
      if (ele.card.card["@type"] === RES_MENU_LIST_KEY) {
        return ele;
      } else if (ele.card.card["@type"] === RES_MENU_NESTED_LIST_KEY) {
        return ele;
      }
    });



    // const resMenuCardObj = resMenuCategoryArr.card.card;
    // let resItemCardsArr = null;
    
    // if (resMenuCardObj.itemCards) {
    //   resItemCardsArr = resMenuCardObj.itemCards;
    // } else if (resMenuCardObj.categories[0].itemCards) {
    //   resItemCardsArr = resMenuCardObj.categories[0].itemCards;
    // }

    setResInfo(resInfoObj);
    setMenuCategories(resMenuCategoryArr);
  };

  return {resInfo, menuCategories};
};


export default RestaurantMenu;