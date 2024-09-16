import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, stopTimer, resetTimer, incrementTimer } from '../store/Features/timerSlice'; 
import { stop,} from "../store/Features/playCardSlice"
import "../assets/styles/Timer.css"

const Timer = () => {
  const dispatch = useDispatch();
  const { seconds, isActive } = useSelector((state) => state.timer);
  const {isPlaying} = useSelector((state) => state.play)
  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        dispatch(incrementTimer());
      }, 10);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    } 
    return () => clearInterval(interval);
  }, [isActive, seconds, dispatch]);

  const handleStart = () => dispatch(startTimer());
  const handleStop = () => {
    dispatch(stopTimer());
    dispatch(stop());
  };

  const handleReset = () => {
    if (!isActive) {
      dispatch(resetTimer());
      dispatch(stop());
    }
  };

  const startButtonClass = () =>{
    switch(true){
      case !isPlaying && !isActive:  
       return '';
      case isPlaying && !isActive:
       return 'blinkingButton';
      case !isPlaying && isActive:
        return "yellowButton";
      case isPlaying && isActive:
        return "greenButton";
    }
  }

  return (
    <div className='timerContainer'>
      <div className='timerItem'>
        <h2>{seconds.toFixed(2)}s</h2>
      </div>
      <div className='buttonsContainer'>
        <button className= {`timerButton ${startButtonClass()}`} onClick={handleStart}>Start</button>
        <button className='timerButton' onClick={handleStop}>Stop</button>
        <button className='timerButton' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
