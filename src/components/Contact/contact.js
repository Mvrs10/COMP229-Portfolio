//File: Contact Page
//Student: Minh Khoi Phan
//ID: 301278135;
//Date: Sept. 28, 2024
import React from 'react';
import './contact.css';
import sm1 from '../../assets/in.png';
import sm2 from '../../assets/fb.png';
import sm3 from '../../assets/x.png';
import sm4 from '../../assets/dc.png';
import Navbar from "../NavBar/navbar";
//HTML
const Contact = () => {
    return (
        <section id="contact">
            <div><Navbar/></div>
            <div className="contactPage">
                <h1 className="contactTitle">Contact Me</h1>
                <span className="contactMessage">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="abc@mail.com" />
                    <textarea className="txtBox" name="message" cols="30" row="5" placeholder="Your Message is here"></textarea>
                    <span><button type="submit" className="submitBtn" value="send">Submit</button>
                    <button type="reset" className="resetBtn" value="reset">Clear</button></span>
                </form>
            </div>
            <div className="social">
                <img src={sm1} className="socialIMG" alt="sm1"/>
                <img src={sm2} className="socialIMG" alt="sm2"/>
                <img src={sm3} className="socialIMG" alt="sm3"/>
                <img src={sm4} className="socialIMG" alt="sm4"/>
            </div>
        </section>
    )
}

export default Contact