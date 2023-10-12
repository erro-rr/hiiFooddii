import { restaurantlist } from "../Contants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../Contants";
import { Link } from "react-router-dom";



function filterData(searchText,restaurants) {
  const filterData=restaurants.filter((resturant) =>
    resturant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);
  return filterData;
}


const Body = ()=>{
      // To create State variable
      const [searchText, setSearchText] = useState("");
      const [allRestaurants, setAllRestaurants] = useState([]);
      const [filteredRestaurants, setFilteredRestaurants] = useState([]);
      const [errorMessage, setErrorMessage] = useState("");

    
    useEffect(()=>{
        getRestaurants();

    },[]);

    // async function getResturant(){
    //     const data= await fetch(swiggy_api_URL);
    //     const json=await data.text();
    //    // console.log(json);
    //     setallRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

     // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }
    console.log("render");
    // Not renderr components early return 

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
          const filteredData = filterData(searchText, restaurants);
          setFilteredRestaurants(filteredData);
          setErrorMessage("");
          if (filteredData?.length === 0) {
            setErrorMessage(`Sorry, we couldn't find any results for "${searchText}"`);
          }
        } else {
          setErrorMessage("");
          setFilteredRestaurants(restaurants);
        }
      };

    if(!allRestaurants) return null;

    return( allRestaurants?.length===0 ?(
        <Shimmer/>
    ):(
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
                    setFilteredRestaurants(data);
            }}>
            Search
            </button>
        </div>
        

         {/* Two way binding where writing and reading at same time */}
        <div className="resturant-list">
            {
                filteredRestaurants?.map(restaurant =>(
                <Link
                to={"/restaurant/"+restaurant.info.id} 
                key={restaurant.info.id}
                >
                   <ResturantCard {...restaurant.info}/>
                </Link>
                )
                )
            }
        </div>
        </>
    )
 );
} 
export default Body;