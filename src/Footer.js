import React from 'react';
import dogrun from './images/dogrun.gif'
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-img">
                <img src={dogrun} alt="dogrunning"></img>
            </div>
        </div>
    )
}

export default Footer;