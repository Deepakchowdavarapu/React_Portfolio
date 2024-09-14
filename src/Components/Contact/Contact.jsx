import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocketchat, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
const Contact = () => {

    const response = () => {
        alert('Thank you for contacting me !')
    }

    const [submitted, setSubmitted] = useState(true);

    return (

        submitted ? 

        <div className="contact-page">
            <h1 className='contacth1'>Contact Me !</h1>
<div className="boxes">
            <input type="text"
            placeholder='  Your Name' 
            className='eachbox'/>

            <input type="email"
            placeholder='  Your Email'
            className='eachbox'/>

            <textarea name="" id="" placeholder='  Like : やあ、あなたはキラです' className='textbox' cols={30} rows={10}></textarea>

</div>

            <button className='submit' ><FontAwesomeIcon className="iconscontact" icon={faRocketchat} />  Submit</button>
        </div>

        : <>hello</>
    );
};

export default Contact;