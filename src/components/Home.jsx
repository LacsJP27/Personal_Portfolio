import '../styles/Home.css';
import { useState, useEffect, useRef } from 'react';
import Typewriter from './Typewriter';

export default function Home() {
    const phrases = [
        "Hi!", 
        "I love to make things!",
        "I am a Computer Science Student at the University of Oklahoma",
        "I love to run and golf!",
        "Welcome to my site :)"
    ];

    return (
    <>
        <div id="home" className="spacer"></div>
        <div className="container">
             <div className="about-me-section">
                <Typewriter phrases={phrases} />
            </div>
        </div>
        <div className="container">
            <div className="big-name">Joseph Lacsamana</div>
        </div>
    </>
    );
}