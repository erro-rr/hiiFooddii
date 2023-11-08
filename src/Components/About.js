import { Outlet, json } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./profile";
import React from "react";
// const About2 = ()=>{
//     return(
//         <div>
//              <h4>hello this is about us</h4>
//              {/* <Outlet/> */}
//              {/* <ProfileClass/> */}
//              <ProfileClass names={"Dev"}/>
//              {/* <Profile/> */}
//              <Profile naame={"Devvendra Singh"}/>
//         </div>
        
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent-constuctor");
    }
     componentDidMount(){
        // Place to call API's

        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-Render");
        return(
            <div>
                 <h4>hello ji  👋</h4>
                 {/* <Outlet/> */}
                 {/* <ProfileClass/> */}
                 {/* <ProfileClass names={"Dev"}/> */}
                 {/* <Profile/> */}
                 <Profile naame={"Devvendra Singh"}/>
            </div> 
        )
    }
} 

export default About;

/*
Parent-Constructor
Parent-Render
    first-child Consturctor
    first-child Render
    Second Child Constructor
    Second Child Render


    DOM updated for children


    First child componentDidMount
    Second Child ComponentDidMount


DOM updated for Parent

Parent componentDidMount


*/