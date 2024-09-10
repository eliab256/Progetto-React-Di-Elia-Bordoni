import React from 'react';
import Timer from '../components/Timer';
import Card from '../components/Card';
import fire from "../assets/img/Fire.jpg";
import forest from "../assets/img/Forest.jpg";
import sea from "../assets/img/Sea.jpg";
import rain from "../assets/img/Rain.jpg";
import "../assets/styles/Home.css";



const Home = () => {
    const environments = [
      { name: 'Forest', imgSrc: {forest} },
      { name: 'Fire', imgSrc:  {fire} },
      { name: 'Rain', imgSrc: {rain} },
      { name: 'Sea', imgSrc: {sea} },
    ];
  
    return (
      <div className="home">
        <div className='homeContainer widthController'>
          <Timer />
          <div className="cardsContainer">
            {environments.map((env, index) => (
              <Card key={index} environment={env.name} imgSrc={env.imgSrc} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;