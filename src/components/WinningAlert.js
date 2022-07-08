import React from "react";
import "./style.css";


function WinningAlert(props) {
  return <div className="alert">
    <br/><br/><br/><br/><h1> Yay~ You Win! </h1>
    {/* <h3 className="blink"> Let's play again?</h3><br/> */}
    <div className="btn btn-danger replay" onClick={props.handleAlert2}> START </div><br/><br/><br/>

    <div>
      {/* <img className='playAgainAlert' src='/assets/images/happy-birthday-to-you-minions.gif' alt='celebrations' /> */}
      <img className='playAgainAlert' src='/assets/images/celebrations.gif' alt='celebrations' />

    </div>
  </div>;
}

export default WinningAlert;
