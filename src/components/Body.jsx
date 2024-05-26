import React from "react";
import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import { restaurantListStatic } from "../utils/mockData";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // FetchData f(n)
  const fetchData = async () => {
    const resData = await fetch(RES_LIST_URL);
    const resJsonObj = await resData.json();

    console.log(
      "resObj updated>>",
      resJsonObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setRestaurantList(
      resJsonObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRest(
      resJsonObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

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

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
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
          className="search-btn"
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
      <div className="res-container">
        {filteredRest.map((resObj, index) => {
          return <RestaurantCard key={resObj.info.id} resData={resObj?.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
