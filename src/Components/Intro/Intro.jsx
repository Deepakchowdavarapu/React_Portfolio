import React from 'react';
import './Intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin, faMeetup, faCreativeCommonsZero, faRockrms, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faCar, faFont, faJedi, faManatSign, faMobile, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faGoodreadsG } from '@fortawesome/free-brands-svg-icons/faGoodreadsG';
import { FaA, FaJarWheat, FaJedi } from 'react-icons/fa6';

const Intro = () => {
    return (
        <>
        <section id="intro" className='intro'>
            

            <div className="introright">
                <span className='introname'>I am <span className='intronameimp  '>Deepak CH <FontAwesomeIcon className="icons" icon={faJedi} /></span></span>

            <div className="box">
            <p>Tech Enthusiast</p>
            <p>Mern Stack Developer</p>
            <p>Learner</p>
            </div>

            <p>Currently at Scaler school of Technology</p>

            <p>pursuing BSc Computer Science from <span className='birla'>BITS Pilani</span></p>

        <p>Looking forward to work with you !    </p>
            </div>


            <div className="introleft">

            <img src="https://kochstrasse.agency/gif-marketing/wp-content/uploads/sites/2/zirkusbaer-2.gif" height="500px" width="500px" alt="photo" />

            </div>

        </section>

        <button className='connect'>  <FontAwesomeIcon className="icons" icon={faRockrms} />  Let's Meet</button>
        </>
    );
};

export default Intro;