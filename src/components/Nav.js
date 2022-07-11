import React from 'react';
import "./style.css";
import ScoreMessage from "./ScoreMessage";

function Nav(props) {
    return (
        <div className="navbar">
            <a className='navbar-brand' href="/"> Megame </a>
            <ul className='nav navbar-nav'>
                <li className='active'>
                    <ScoreMessage score={props.score} topScore={props.topScore} />
                </li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
                <li>
                    Score: {props.score} &nbsp; &nbsp;|&nbsp; &nbsp; Top Score: {props.topScore}
                </li>
            </ul>
        </div>
    )
};

export default Nav;