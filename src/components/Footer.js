import React from 'react';
import './style.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='bottom'>
                <p> © 2022 Mandy Tsang 
                    <br/>
                    <a className="github-link" href="https://github.com/MANDYTSANG007/megame" target="_blank"> https://github.com/MANDYTSANG007/megame </a>
                </p>
                {/* <a href="https://github.com/MANDYTSANG007/megame" target="_blank"> https://github.com/MANDYTSANG007/megame </a> */}
            </div>
        </footer>
    )
}

export default Footer;


