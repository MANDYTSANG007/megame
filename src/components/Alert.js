import React from "react";
import "./style.css";

function Alert(props) {
  return <div className="alert">
    <br/><br/><br/><br/><h1> Ooops! </h1>
    <h3 className="blink"> Let's play again?</h3><br/>
    <div className="btn btn-danger replay" onClick={props.handleAlert}> OK </div><br/><br/><br/>

    <div>
      <img className='playAgainAlert' src='/assets/images/haha.gif' alt='laughing' />
    </div>
  </div>;
}

export default Alert;
