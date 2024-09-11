import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, stopTimer, resetTimer, incrementTimer } from '../store/timerSlice'; // Verifica il percorso
import "../assets/styles/Timer.css"

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

 
  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 0.01);
      }, 10);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    } 
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => setIsActive(true);
  const handleStop = () => setIsActive(false);

  const handleReset = () => {
    if (!isActive) {
      setSeconds(0); 
    } 
  };

  return (
    <div className='timerContainer'>
      <div className='timerItem'>
        <h2>{seconds.toFixed(2)}s</h2>
      </div>
      <div className='buttonsContainer'>
        <button className='timerButton' onClick={handleStart}>Start</button>
        <button className='timerButton' onClick={handleStop}>Stop</button>
        <button className='timerButton' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
