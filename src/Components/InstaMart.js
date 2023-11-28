
import React, { useState } from 'react';
const Section = ({ title, description }) => {
  const[isVisible,setIsVisible]=useState(false);
    return (
      <div className="border border-black p-2 m-2">
        <h3 className="text-3xl">{title}</h3>
        {
          isVisible ?(<button onClick={()=>setIsVisible(false)} className="">Hide</button>)
          :
          (<button onClick={()=>setIsVisible(true)}className="">Show</button>)
        }
        {isVisible && <p>{description}</p>}
      </div>
    );
  };
  
  const InstaMart = () => {
    return (
      <div>
        <h1 className="text text-3xl p-2 m-2 font-bold text-purple-600">InstaMart</h1>
        <Section
          title={"About Instamart"}
          description={"This is the about of the section instamart"}
        />

       <Section
          title={"Hello Instamart"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
        /> 

        <Section
          title={"Careers"}
          description={"This is the career section of instamart"}
        /> 
      </div>
    );
  };
  
  
export default InstaMart;