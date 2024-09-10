import React, { useState, useEffect } from 'react';
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
    <div className='TimerContainer'>
      <div className='TimerItem'>
        <h2>{seconds.toFixed(2)}s</h2>
      </div>
        <button className='timerButton' onClick={handleStart}>Start</button>
        <button className='timerButton' onClick={handleStop}>Stop</button>
        <button className='timerButton' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
