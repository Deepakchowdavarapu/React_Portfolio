import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRProject,faAccusoft,fa42Group, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { faProcedures ,faDiagramProject, faProjectDiagram, faAddressCard, faBridgeCircleCheck, faFile, faTicketSimple, faChessKnight, faHandSparkles, faHandsPraying, faKipSign, faD, faPencilSquare, faClover, faContactCard, faContactBook} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav>
            <div className="bigtext">
            <FontAwesomeIcon className="icons" icon={faClover} />  DPK  <FontAwesomeIcon className="icons" icon={faClover} />
            </div>

            <ol className='navlinkssec'>
                <li><Link to="intro" className="navlinks" smooth={true} duration={500}>  <FontAwesomeIcon className="icons" icon={faBridgeCircleCheck} />  Bout'me</Link></li>
                <li><Link to="whatido" className="navlinks" smooth={true} duration={500}>   <FontAwesomeIcon className="icons" icon={faProjectDiagram} />  WhatIDo</Link></li>
                <li><Link to="projectsfull" className="navlinks" smooth={true} duration={500}> <FontAwesomeIcon className="icons" icon={faFile} />  projects</Link></li>
                <li><Link to="qualifications" className="navlinks" smooth={true} duration={500}> <FontAwesomeIcon className="icons" icon={faTicketSimple} /> Academics</Link></li>
                <li><Link to="contact-page" className="navlinks" smooth={true} duration={500}> <FontAwesomeIcon className="icons" icon={faContactBook} /> Contact</Link></li>
            </ol>   

            {/* <div className="contact">
                <i className="fas fa-envelope"></i>
                {/* <div className='contactbtn'  > <Link to="contact-page" className="navlinks"></Link> <FontAwesomeIcon className="icons" icon={faConnectdevelop} /> Connect</div> */}
            {/* </div>  */}
        </nav>
    );
};

export default NavBar;