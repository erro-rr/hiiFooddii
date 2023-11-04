import { useEffect, useState } from "react";
const useOnline=()=>{
    const [isOnline,setisOnline]=useState(navigator.onLine);

   useEffect(()=>{
    const handleOnline = () => {
        setisOnline(true);
    };
    const handleOffline = ()=> {
        setisOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline",handleOffline);

    return()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
    };

   },[isOnline]);

   return isOnline;

   // Whenever we are creating addEventListener it's good practice to clean them
      // true or false;
};
export default useOnline;