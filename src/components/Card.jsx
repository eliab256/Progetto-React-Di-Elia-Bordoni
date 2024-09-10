import React from 'react';


const Card = ({ environment, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={environment} className="card-image" />
      <h3>{environment}</h3>
    </div>
  );
};

export default Card;