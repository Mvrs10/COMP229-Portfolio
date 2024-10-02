//File: About page
//Student: Minh Khoi Phan
//ID: 301278135;
//Date: Sept. 28, 2024import React from 'react';
import './about.css';
import profilepic from '../../assets/profpic.jpg';
import Navbar from "../NavBar/navbar";
//import WebViewer from '@pdftron/webviewer';
//HTML
const About = () => {
    return (
        <section id="about">
            <div><Navbar/></div>
            <img src={profilepic} className="profilepic" alt="MKP"/>
            <span className="aboutTitle">My skills</span>
            <span className="aboutSkills">A passionate programmer for user-oriented design, game development and creating aesthetically pleasing interfaces. Highly skilled with problem-solving, debugging, and strong time management skills.</span>
            <div className="aboutSkillList">
                <div className="aboutSkillItems">
                    <h2>Software Development</h2>
                    <p>Skilled in: C#, Java, HTML, CSS, JavaScript, Bash.</p>
                </div>
                <div className="aboutSkillItems">
                    <h2>UI/UX Design</h2>
                    <p>Experienced with: Unity, Blender, Figma, Visual Paradigm</p>
                </div>
                <div className="aboutSkillItems">
                    <h2>Creativity</h2>
                    <p>Applying unique features into every projects</p>
                </div>
            </div>
            <div className="resumeSection">
                <a className="resume" href="https://drive.google.com/file/d/1jbbmosiGwdMmfPk3vQbafRTHJ62CnSMc/view?usp=sharing" target="_blank" rel="noreferrer">👉 My Resume 👈</a>
            </div>
        </section>        
    )
}

export default About