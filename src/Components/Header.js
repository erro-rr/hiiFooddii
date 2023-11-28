import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import InstaMart from "./InstaMart";
import Logo from "../assets/Logo/heyfood.jpg"
const Title= ()=> (
    <a href="/">
        <img className="h-28 p-2" src={Logo}/>
    </a>
);
const Header = ()=>{
    const[isloggedIn,setisloggedIn]=useState(true);
    const isOnline=useOnline();
 return(
     <div className="flex justify-between bg-slate- shadow-lg text-slate-800 p-5 "> 
         <Title />
         <div className="nav-items">
             <ul className="flex py-10">
                 <Link to="/"> 
                 <li className="px-2 hover:text-orange-500">Home</li>
                 </Link>

                 <Link to="/About">
                 <li className="px-2 hover:text-orange-500" > About </li>
                 </Link>

                 <Link to="/contact">
                 <li className="px-2 hover:text-orange-500"> Contact </li>
                 </Link>

                 <Link to="/InstaMart">
                 <li className="px-2 hover:text-orange-500 "> Insta-Mart </li>
                 </Link>
                 
                 <li className="px-2 hover:text-orange-500"> Cart</li>
             </ul>
             
         </div>
       <div className="flex ">
        <ul className="flex py-10 px-10 justify-between">
            <li> <h1>{isOnline ? "🟢" : "🔴"}</h1> </li>
            <li className="hover:text-orange-500">    
        {
          isloggedIn? (
            <button onClick={()=>setisloggedIn(false)}>Logout</button>
            ):(
            <button onClick={()=>setisloggedIn(true)}>Login</button>
            )
        }
        </li>
        </ul>
       </div>
         
     </div>

 );
}
//Default exporter
export default Header;
