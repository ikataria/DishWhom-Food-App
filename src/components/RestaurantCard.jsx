import { FOOD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, locality, costForTwo, avgRating } =
    resData;
  const { slaString: deliveryTime, lastMileTravelString: distance } =
    resData?.sla;


  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src={FOOD_IMG_URL + cloudinaryImageId}
        alt="Resturant-logo"
      />
      <div className="res-card-description">
        <h3 className="res-card-h3">{name}</h3>
        <p>
          ⭐{avgRating} . {deliveryTime}
        </p>
        <div className="lightColor">
          <span>{cuisines.join(", ")}</span>
          <br />
          <span>
            {locality} - {distance}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
