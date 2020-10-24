import React from 'react'
import '../../src/App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={require("../videos/video-5.mp4")} autoPlay loop muted />
            <h1>Welcome to my portfolio.</h1>
            <p>My name is Ryan Brooks and I am a full stack web developer from Charlotte, NC. Thank you for taking time to visit my page. </p>
            <p>Please be sure to view my portfolio and resume below.</p>
            <img className='headshot' src={require('../images/ryanheadshot.png')} alt='Ryan'></img>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>View Resume
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection;
