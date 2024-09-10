import React from 'react';
import "../assets/styles/Card.css"


const Card = ({ environment, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={environment} className="cardImage" />
      <h3>{environment}</h3>
    </div>
  );
};

export default Card;