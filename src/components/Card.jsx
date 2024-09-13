import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { play, stop,} from "../store/Features/playCardSlice"
import "../assets/styles/Card.css"
import playImg from "../assets/img/PlaySymbol.png"


const Card = ({ environment, imgSrc, audioSrc }) => {
  const dispatch = useDispatch();
  const {  isActive } = useSelector((state) => state.timer);
  const {isPlaying} = useSelector((state) => state.play)

  const pushPlay = () =>{
    dispatch(play());
  };

  const playAudio = () =>{
    if(isPlaying && isActive){
      const audio = new Audio(audioSrc);
      audio.play();
    }

  const pushPlayAudio = () =>{
    pushPlay();
    playAudio();
  }

  }

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