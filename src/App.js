import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/ResturantMenu";

const Applayout = ()=>{
    return(
        // outlet
        <>
        <Header/>
        {/* <Body/> */}
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },

            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            },
        ]
    },
   
]);

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 