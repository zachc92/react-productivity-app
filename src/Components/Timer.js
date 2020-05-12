import React from 'react';
import '../styles/Timer.scss';

const Timer = (props) => {
    return (
       <div className="timer-container">
         <h2>{props.timer}</h2>
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