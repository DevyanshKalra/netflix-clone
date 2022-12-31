import React from 'react';
import "../Assets/css/card.css"

const Card = (props) => {
    
    return (
        <div className={`cardContainer w-full flex justify-center items-center ${props.reverse && 'flex-row-reverse'}`}>
            <div className='cardTextContainer mx-5'>
                <span className='text-3xl md:text-5xl  sm:text-4xl text-white font-semibold '>{props.title}</span><br/><br/>
                <span className='text-xl md:text-3xl sm:text-2xl  text-white '>{props.content}</span>
            </div>
            <div className='gifContainer'>
                <img src={props.image} className="gifImage"/>
            </div>
        </div>
    );
};

export default Card;