import React from 'react';
import "../assets/styles/Card.css"
import play from "../assets/img/PlaySymbol.png"


const Card = ({ environment, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={environment} className="cardImage" />
      <div className='cardName'>
        <h3>{environment}</h3>
      </div>
      <div className='cardPlay'>
        <img src={play} alt="play img" /*onClick={}*/ className='cardPlayImage'></img>
      </div>
      
    </div>
  );
};

export default Card;