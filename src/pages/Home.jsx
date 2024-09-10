import React from 'react';
import Timer from '../components/Timer';
import Card from '../components/Card';
import "../assets/styles/Home.css"

const Home = () => {
    const environments = [
      { name: 'Forest', imgSrc: '/img/forest.jpg' },
      { name: 'Fire', imgSrc: '/img/beach.jpg' },
      { name: 'Rain', imgSrc: '/img/rain.jpg' },
      { name: 'Sea', imgSrc: '/img/mountain.jpg' },
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