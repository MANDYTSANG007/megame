import React from 'react';
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brandName">
                    <a href="/"> Megame </a>
                </li>
                <li>
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    )
};

export default Nav;