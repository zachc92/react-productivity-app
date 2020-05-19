import React from 'react';
import '../styles/Timer.scss';

const Timer = (props) => {
   let mind = props.timer % (60 * 60);
   let minutes = Math.floor(mind / 60);

   let secd = mind % 60;
   var seconds = Math.ceil(secd);

   console.log(minutes, seconds)


    return (
       <div className="timer-container">
         <h2>{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</h2>
         <div className="ui icon buttons">
            <div className="ui button" onClick={props.beginTimer}><i className="play icon"></i></div>
            <div className="ui button" onClick={props.endTimer}><i className="stop icon"></i></div>
            <div className="ui button" onClick={props.onReset}><i className="undo icon"></i></div>
         </div>
      </div>
    )
}

export default Timer;

// `${Math.floor((props.timer % (1000 * 60 * 60)) / (1 * 60))}`