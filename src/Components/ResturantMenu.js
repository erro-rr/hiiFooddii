
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../Contants";   
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  console.log(resId);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL+resId);
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      const json = await response.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
      
      // const uniqueMenuItems = [];
      // menuItemsData.forEach((item) => {
      //   if (!uniqueMenuItems.find(x => x.id === item.id)) {
      //     uniqueMenuItems.push(item);
      //   }
      // })
      setMenuItems(menuItemsData);

      console.log("API Response:", json);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return (!restaurant)? <Shimmer/> :(
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2>{restaurant?.name}</h2>
          <h3>{resId}</h3>
          <p>{restaurant?.cuisines?.join(", ")}</p>
            <i className="fa-solid fa-star"></i>
            <span>{restaurant?.avgRating}</span>
            <div>|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
      </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div key={item?.id}>
                  <h4>{item?.name}</h4>
              </div>
            ))}
          </div>
        </div>
  );
};

export default RestaurantMenu;