//File: Homepage
//Student: Minh Khoi Phan
//ID: 301278135;
//Date: Sept. 28, 2024
import React from 'react';
import './intro.css';
import vashpic from '../../assets/Vash.png';
// HTML
const Intro = () => {
    return (
       <section id="intro">
            <div className="introduction">
                <span className="waving">Hello 👋🏻</span>
                <span className="introText">My name is <span className="myName">Khoi</span>
                <br></br>Game Programmer
                </span>
                <p className="introMission">I'm a long-time gamer, enthusiastic educator from Viet Nam ⭐ and an international student in Canada 🍁, majoring in Game-Programming 🎮.</p>
                <p className="introMission">My mission is to create meaningful games for gamers.</p>
            </div>
            <img src={vashpic} className="vashpic" alt="Vash"/>
       </section>
    )
}

export default Intro