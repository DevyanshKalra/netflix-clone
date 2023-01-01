import React, { useContext } from 'react';
import "../Assets/css/card.css"
import { ThemeContext } from '../Contexts/ThemeContext';

const Card = (props) => {
    const theme = useContext(ThemeContext)
    
    return (
        <div className={`cardContainer  w-full ${theme.lightMode===true?"bg-white border-b-8 border-stone-100":"bg-black border-b-8 border-neutral-800"} flex justify-center items-center ${props.reverse && 'flex-row-reverse'}`}>
            <div className={`cardTextContainer ${theme.lightMode===true?"text-black":"text-white"} mx-5`}>
                <span className='text-3xl md:text-5xl  sm:text-4xl  font-semibold '>{props.title}</span><br/><br/>
                <span className='text-xl md:text-3xl sm:text-2xl   '>{props.content}</span>
            </div>
            <div className='gifContainer'>
                <img src={props.image} className="gifImage"/>
            </div>
        </div>
    );
};

export default Card;