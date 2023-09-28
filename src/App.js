import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// import { Title } from "./Components/Header";

// we can do above two step in one step
// import Header,{title} from "./Components/Header";



const Applayout = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout />);