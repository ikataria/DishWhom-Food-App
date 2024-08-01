import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import { RES_LIST_URL, RES_LIST_KEY, RES_LIST_RES_OBJ_KEY } from "../utils/constants";
import Shimmer from "./Shimmer";
import Offline from "./Offline";
import UserContext from "../utils/UserContext";

import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { loggedInUser } = useContext(UserContext);


  // FetchData f(n)
  const fetchData = async () => {
    const resData = await fetch(RES_LIST_URL);
    const resJsonObj = await resData.json();

      // Query for RES_INFO
      const resListNestedObj = resJsonObj.data.cards.find((ele) =>{
        if(ele?.card?.card?.["@type"] === RES_LIST_KEY){
            let infoWithStyleObj = ele?.card?.card?.gridElements?.infoWithStyle;
            if (infoWithStyleObj?.["@type"] === RES_LIST_RES_OBJ_KEY){
              return ele 
            } 
          // console.log('search Arr: ', ele?.card?.card?.gridElements?.infoWithStyle?.["@type"] === RES_LIST_RES_OBJ_KEY)

        }
        
      } 
      );

    // console.log(
    //   "resObj updated>>",resListNestedObj?.card?.card
    // );

    setRestaurantList(resListNestedObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRest(resListNestedObj?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    // setRestaurantList(
    //   resJsonObj?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    // setFilteredRest(
    //   resJsonObj?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    // const moreData = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/update",
    //   {
    //     method: "POST",
    //     mode: "cors",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // const lazyLoading = await moreData.json();
    // console.log("lazyLoading:", lazyLoading);
  };

  // Called useEffect Hook
  useEffect(() => {
    // console.log('useEffect hook called');
    fetchData();
  }, []);

  const isOnline = useOnlineStatus();
  if(!isOnline){
    return (
      <Offline/>
    )
  }


  return restaurantList == "undefined" && restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
        <div>
          <h4 className=" text-center m-2 font-normal capitalize">
            {loggedInUser ? "Bonjour " + loggedInUser : ""}{" "}
          </h4>
        </div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          placeholder="Search your restaurant here..."
        />
        <button
          className="search-btn btn"
          onClick={() => {
            const searchRest = restaurantList.filter((e) =>
              e.info.name.toLowerCase().includes(searchInput)
            );
            setFilteredRest(searchRest);
          }}
        >
          Search
        </button>
      </div>
      {filteredRest === undefined || filteredRest?.length === 0 ? (<Shimmer/>) : (
        <div className="res-container">
        {filteredRest.map((resObj, index) =>  (
          <Link key={resObj.info.id} to={"/restaurants/" + resObj?.info?.id}>
              <RestaurantCard resData={resObj?.info} />
            </Link>
          )
        )}
      </div>
        ) }
    </div>
  );
};

export default Body;
