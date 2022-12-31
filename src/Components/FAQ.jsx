import {React, useState} from "react";
import "../Assets/css/faq.css";
const FAQ = (props) => {
    const [accordianState,setAccordianState]=useState(false)
    
  return (
    <div className="accordianContainer p-3 m-3" >
      <div className=" accordianHeader flex justify-between items-center" onClick={()=>{setAccordianState(!accordianState);console.log("toggled");}}>
        <div className="text-base md:text-2xl sm:text-2xl  text-white  px-3 ">
          {props.question}
        </div>
        <div className={`accordianIcon text-xl md:text-4xl sm:text-2xl  text-white  px-3 font-extrabold ml-5 ${accordianState===false?"accordianIconClosed":"accordianIconOpened"}`}  >
          +
        </div>
      </div>
      <div className={`accordianContent p-3  ${accordianState===false?"hidden":""}`} >
        <div className="accordianContentText">
        <span className="text-base md:text-2xl sm:text-1xl text-white  p-3  ">
          {props.answer}
        </span></div>
      </div>
    </div>
  );
};

export default FAQ;
