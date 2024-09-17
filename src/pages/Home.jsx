import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetError } from "../store/Features/statusSlice";

//import components
import Timer from '../components/Timer';
import Card from '../components/Card';

//import img card
import fire from "../assets/img/Fire.jpg";
import forest from "../assets/img/Forest.jpg";
import sea from "../assets/img/Sea.jpg";
import rain from "../assets/img/Rain.jpg";

//import audio file
import fireAudio from "../assets/audio/Fire.wav"
import forestAudio from "../assets/audio/Forest.wav"
import seaAudio from "../assets/audio/Sea.wav"
import rainAudio from "../assets/audio/Rain.wav"

import "../assets/styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.status);

  useEffect(() => {
    if (error) {
      alert('An error has occurred. Please reload the page to try again');
      // Puoi decidere di resettare l'errore dopo aver mostrato l'alert
      dispatch(resetError());
    }
  }, [error, dispatch]);

    const environments = [
      { name: 'Fire', imgSrc:  fire, audioSrc:  fireAudio },
      { name: 'Forest', imgSrc: forest, audioSrc:  forestAudio},
      { name: 'Rain', imgSrc: rain, audioSrc:  rainAudio},
      { name: 'Sea', imgSrc: sea, audioSrc:  seaAudio }, 
    ];

    return (
      <div className="home">
        <div className='homeContainer widthController'>
          <Timer />
          <div className="cardsContainer">
            {environments.map((env, index) => (
              <Card key={index} environment={env.name} imgSrc={env.imgSrc} audioSrc={env.audioSrc} /> 
            ))}
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;