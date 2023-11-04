import { IMG_CDN_URL} from "../Contants"
const ResturantCard = ({
    name,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    cloudinaryImageId
   })=>{
    return(
        <div className="w-60 p-2 m-2 shadow-2xl">
            <img className=" relative  " src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className="font-extrabold">{name}</h2>
            <h4>{cuisines.join(" ")}</h4>
            <span>
            <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
            </span> 
        </div>
    )
} 

export default ResturantCard;
