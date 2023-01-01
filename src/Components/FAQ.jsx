import {React, useState, useRef, useContext} from "react";
import "../Assets/css/faq.css";
import { ThemeContext } from '../Contexts/ThemeContext';
const FAQ = (props) => {
    const [accordianState,setAccordianState]=useState(false)
    const accordianText=useRef();
    const theme=useContext(ThemeContext)
    function scrollToContent(){
      accordianText.scrollIntoView({behavior: 'smooth'});
      console.log("scrolling works")
    }
  return (
    <div className={`accordianContainer  p-3 m-5 ${theme.lightMode===true?"text-black bg-slate-200":"text-white bg-neutral-800"}`} ref={accordianText} >
      <div className=" accordianHeader flex justify-between items-center" onClick={()=>{setAccordianState(!accordianState);console.log("toggled");scrollToContent();}}>
        <div className={`text-base md:text-2xl sm:text-2xl    px-3 `}>
          {props.question}
        </div>
        <div className={`accordianIcon text-xl md:text-4xl sm:text-2xl  px-3 font-extrabold ml-5 ${accordianState===false?"accordianIconClosed":"accordianIconOpened"}`}  >
          +
        </div>
      </div>
      <div className={`accordianContent p-3   ${accordianState===false?"hidden":""}` }  >
        <div className="accordianContentText"  >
        <span   className="text-base md:text-2xl sm:text-1xl  p-3  "  >
          {props.answer}
        </span></div>
      </div>
    </div>
  );
};

export default FAQ;
