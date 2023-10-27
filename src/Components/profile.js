import { useEffect, useState } from "react";
const Profile=(props)=>{
const[count,setcount]=useState(0);
const[count2,setcount2]=useState(0);

 useEffect(()=>{
    // console.log("useEffect");
    // const timeout=setInterval(()=>{
    //     console.log("Hello ji");
    // },1000);
    return ()=>{
        // clearInterval(timeout);
        console.log("Use effect Return");
    }

 },[])
//  console.log("render");
return(
        <div>
            <h2>Profile components</h2>
            <h3>Name:{props.naame}</h3>
            {/* <h3>Count:{count}</h3> */}
            {/* <h3>Count2:{count2}</h3> */}
            {/* <button onClick={()=>{setcount(count+1),setcount2(1)}}>count</button> */}
            
        </div>
    )
}

export default Profile;