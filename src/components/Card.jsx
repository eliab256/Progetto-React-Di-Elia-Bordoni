//@ts-nocheck

import React, { useEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { play, stop,} from "../store/Features/playCardSlice"
import "../assets/styles/Card.css"
import playImg from "../assets/img/PlaySymbol.png"


const Card = ({ environment, imgSrc, audioSrc}) => {

  const dispatch = useDispatch();
  const {isActive } = useSelector((state) => state.timer);
  const {isPlaying} = useSelector((state) => state.play);
  const  audioFile = useRef(null);

  const pushPlay = () =>{
    dispatch(play());
  };

  useEffect(() => {
    // Crea un nuovo file audio quando cambia audioSrc
    if (audioFile.current) {
      audioFile.current.pause();
      audioFile.current.currentTime = 0; // Resetta l'audio precedente
    }

    audioFile.current = new Audio(audioSrc);

    return () => {
      // Cleanup dell'audio quando il componente si smonta o cambia audioSrc
      if (audioFile.current) {
        audioFile.current.pause();
        audioFile.current.currentTime = 0;
      }
    };
  }, [audioSrc]);


  useEffect(() =>{
    if(isPlaying && isActive){
      audioFile.current.loop = true;
      audioFile.current.play();
    } else {
      if(audioFile.current){
        audioFile.current.pause();
        audioFile.current.currentTime = 0;
      }
    }

    return () => {
      if (audioFile.current){
        audioFile.current.pause();
        audioFile.current.currentTime = 0;
      }
    };
  }, [isPlaying, isActive, ]);


  return (
    <div className="card">
      <img src={imgSrc} alt={environment} className="cardImage" />
      <div className='cardName'>
        <h3>{environment}</h3>
      </div>
      <div className='cardPlay'>
        <img src={playImg} alt="play img" onClick={() => pushPlay(audioSrc)} className='cardPlayImage'></img>
      </div>
      
    </div>
  );
};

export default Card;


