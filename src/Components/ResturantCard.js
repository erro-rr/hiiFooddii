import { IMG_CDN_URL} from "../Contants"
const ResturantCard = ({
    name,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    cloudinaryImageId
   })=>{
    const displayedCuisines = cuisines.slice(0, 2);
    return(
           <div className="hover:shadow-2xl w-60 p-2 m-2">
            <img
             className="" 
             src={IMG_CDN_URL+cloudinaryImageId}

             />
            <h2 className="font-extrabold">{name}</h2>
            <h4>{displayedCuisines.join(" ")}</h4>
            <span>
            <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
            </span> 
        </div>
    )
} 

export default ResturantCard;
