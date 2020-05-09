import React from 'react';
import '../styles/Timer.scss';

const Timer = (props) => {
   // pomodoro timer functionality in here

   const beginTimer = () => {
      setInterval(() => props.updateTime(), 1000);
   }

   const endTimer = () => {
      clearInterval((beginTimer));
   }

    return (
       <div className="timer-container">
         <h2>{props.timer}</h2>
         <div className="ui icon buttons">
            <div className="ui button" onClick={beginTimer}><i className="play icon"></i></div>
            <div className="ui button" onClick={endTimer}><i className="stop icon"></i></div>
            <div className="ui button"><i className="undo icon"></i></div>
         </div>
      </div>
    )
}

export default Timer;