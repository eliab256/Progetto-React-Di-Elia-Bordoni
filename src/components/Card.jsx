import React, { useEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { play, stop,} from "../store/Features/playCardSlice"
import "../assets/styles/Card.css"
import playImg from "../assets/img/PlaySymbol.png"


const Card = ({ environment, imgSrc, audioSrc}) => {

  console.log("Audio source path in Card:", audioSrc);

  const dispatch = useDispatch();
  const {isActive } = useSelector((state) => state.timer);
  const {isPlaying} = useSelector((state) => state.play);
  const  audioFile = useRef(new Audio(audioSrc));

  const pushPlay = () =>{
    dispatch(play());
  };

  useEffect(() =>{

    if(isPlaying && isActive){
      audioFile.current.loop = true;
      audioFile.current.play();
      
    } else {
      audioFile.current.pause();
      audioFile.current.currentTime = 0;
    }

    return () => {
      audioFile.current.pause();
      audioFile.current.currentTime = 0;
    };
  }, [isPlaying, isActive, ]);

  useEffect(() =>{
    audioFile.current.src = audioSrc;
  }, [audioSrc]);


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


//alert("il percorso fino a qui è corretto");