import { useState } from "react";
import { Link } from "react-router-dom";
const Title= ()=> (
    <a href="/">
      <div className="logo">
         <img 
         alt="logo" 
         src="https://cdn1.vectorstock.com/i/1000x1000/13/80/organic-food-restaurant-logo-vector-17131380.jpg"
         >
         </img>
     </div>

    </a>

);


const Header = ()=>{
    const[isloggedIn,setisloggedIn]=useState(true);
 return(
     <div className="header"> 
         <Title />
         
         <div className="nav-items">
             <ul>
                 <a href="/"> 
                 <li>Home</li>
                 </a>

                 <Link to="/About">
                 <li> About </li>
                 </Link>

                 <Link to="/contact">
                 <li> Contact </li>
                 </Link>
                 
                 <li> Cart</li>
             </ul>
         </div>
        {
            isloggedIn? (
            <button onClick={()=>setisloggedIn(false)}>Logout</button>
            ):(
            <button onClick={()=>setisloggedIn(true)}>Login</button>
            )
        }
     </div>

 );
}
//Default exporter
export default Header;
