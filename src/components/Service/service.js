//File: Service Page
//Student: Minh Khoi Phan
//ID: 301278135;
//Date: Sept. 28, 2024import React from 'react';
import React from 'react';
import './service.css';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import Navbar from "../NavBar/navbar";
//HTML
const Service = () => {
    return (
        <section id="service">
            <div><Navbar/></div>
            <div>
            <h2 className="serviceTitle">My Service</h2>
            <span className="serviceDesc">Here are my commitment to the service that I provide</span>
            </div>
            <div className="serviceList">
                <div className="serviceItems">
                    <h2>Software Design</h2>
                    <img src={s1} className="serviceIMG" alt="s1"/>
                </div>
                <div className="serviceItems">
                    <h2>Game Development</h2>
                    <img src={s2} className="serviceIMG" alt="s2"/>
                </div>
                <div className="serviceItems">
                    <h2>Web Design</h2>
                    <img src={s3} className="serviceIMG" alt="s3"/>
                </div>
            </div>
        </section>
    )
}

export default Service