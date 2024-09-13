import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../assets/styles/Card.css"
import playImg from "../assets/img/PlaySymbol.png"


const Card = ({ environment, imgSrc, audioSrc}) => {
  const dispatch = useDispatch();

  const pushPlay = () =>{
    dispatch(play());
  };

  return (
    <div className="card">
      <img src={imgSrc} alt={environment} className="cardImage" />
      <div className='cardName'>
        <h3>{environment}</h3>
      </div>
      <div className='cardPlay'>
        <img src={playImg} alt="play img" onClick={pushPlay} className='cardPlayImage'></img>
      </div>
      
    </div>
  );
};

export default Card;