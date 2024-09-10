import React from 'react';
import Timer from '../components/Timer';
import Card from '../components/Card';

const Home = () => {
    const environments = [
      { name: 'Forest', imgSrc: '/img/forest.jpg' },
      { name: 'Fire', imgSrc: '/img/beach.jpg' },
      { name: 'Rain', imgSrc: '/img/rain.jpg' },
      { name: 'Sea', imgSrc: '/img/mountain.jpg' },
    ];
  
    return (
      <div className="home">
        <Timer />
        <div className="cards-container">
          {environments.map((env, index) => (
            <Card key={index} environment={env.name} imgSrc={env.imgSrc} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;