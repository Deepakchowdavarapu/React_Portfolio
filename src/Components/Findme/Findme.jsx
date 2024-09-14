import React from 'react';
import './Findme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Findme = () => {
    return (
        <div className='fas'>
            <FontAwesomeIcon className="icons" icon={faFacebook} />
            <FontAwesomeIcon className="icons" icon={faInstagram} />
            <FontAwesomeIcon className="icons" icon={faGithub} />
            <FontAwesomeIcon className="icons" icon={faLinkedin} />                
        </div>
    );
};

export default Findme;