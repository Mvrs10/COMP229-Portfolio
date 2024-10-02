//File: Project Page
//Student: Minh Khoi Phan
//ID: 301278135;
//Date: Sept. 28, 2024import React from 'react';
import React from 'react';
import './project.css';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.png';
import Navbar from "../NavBar/navbar";
//HTML
const Project = () => {
    return (
        <section id="project">
            <div><Navbar/></div>
            <div>
            <h2 className="projectTitle">My Projects</h2>
            <span className="projectDesc">2023-Present</span>
            </div>
            <div className="projectList">
                <div className="projectItems">
                    <h2>Software Design</h2>
                    <ul>
                        <li>Task Management System</li>
                        <img src={p1} className="projectIMG" alt="p1"/>
                        <li>EDU Games</li>
                        <img src={p2} className="projectIMG" alt="p2"/>
                        <li>Smart Tutor Aid</li>
                        <img src={p3} className="projectIMG" alt="p3"/>
                    </ul>
                </div>
                <div className="projectItems">
                    <h2>Game Development</h2>
                    <ul>
                        <li>Space Shooter</li>
                        <img src={p4} className="projectIMG" alt="p4"/>
                        <li>Death to Dewy</li>
                        <img src={p5} className="projectIMG" alt="p5"/>
                        <li>Squidz</li>
                        <img src={p6} className="projectIMG" alt="p6"/>
                    </ul>
                </div>
                <div className="projectItems">
                    <h2>Web Design</h2>
                    <ul>
                        <li>Math Center front-end</li>
                        <img src={p7} className="projectIMG" alt="p7"/>
                        <li>Interactive Card Battle Board</li>
                        <img src={p8} className="projectIMG" alt="p8"/>
                        <li>Customized Portfolio (WIP)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Project