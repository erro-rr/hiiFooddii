import { restaurantlist } from "../Contants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { useEffect } from "react";


function filterData(searchText,restaurants) {
    if (!restaurants) {
        // Handle the case where restaurants is undefined (e.g., initial render)
        return [];
      }
  const filterData=restaurants.filter((resturant) =>
    resturant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);
  return filterData;
}


const Body = ()=>{
      // To create State variable
    const[allRestaurants,setallRestaurants]=useState([]);
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    
    useEffect(()=>{
        getResturant();

    },[searchText]);

    async function getResturant(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.689214&lng=77.2239895&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
       // console.log(json);
        setallRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("render");
    // Not renderr components early return 
    if(!allRestaurants) return null;

    return(
        <>
        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button className="Search-button" onClick={ ()=> {
                    // filter the data
                    const data = filterData(searchText, allRestaurants);
                    // update the state of restaurants list
                    setfilteredRestaurants(data);
            }}>
            Search
            </button>
        </div>
        

         {/* Two way binding where writing and reading at same time */}
        <div className="resturant-list">
            {
                filteredRestaurants?.map(restaurant =>{
                return <ResturantCard {...restaurant.info}/>
               }
                )
            }
        </div>
        </>
 );
} 
export default Body;