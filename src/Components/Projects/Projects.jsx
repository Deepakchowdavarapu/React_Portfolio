import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin, faMeetup, faCreativeCommonsZero, faPython, faReact, faJava, faReacteurope, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCar, faFont, faFrog, faMobile, faMoneyBillWave, faTrainSubway, faVolumeTimes } from '@fortawesome/free-solid-svg-icons';
import portfolio from './../../Assets/portfolio.png';
import todolist from './../../Assets/todo.png';
import library from './../../Assets/library.png';
import imageeditor from './../../Assets/imageeditor.jpeg';
import webcrawler from './../../Assets/webcrawler.jpeg';

const Projects = () => {
    return (
        <div className='projectsfull'>
            <h1>Projects</h1>
            <section className="projects-section">
                <div className="projects-container">
                    <div className="project-card">
                        <img src={imageeditor} alt="Project Image" className="project-image" />
                        <h3>Image Editor</h3>
                        <p>An Application featuring compressing , blurrring & resizing images</p>
                        <div className="icons">
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                        <FontAwesomeIcon className="icons" icon={faJava} />
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={todolist} alt="Project Image" className="project-image" />
                        <h3>ToDo App</h3>
                        <p>A todo app made with ReactJS to help you activities you'd keep tracking.</p>
                        <div className="icons">
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                        <FontAwesomeIcon className="icons" icon={faJs} />
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={library} alt="Project Image" className="project-image" />
                        <h3>Library Management</h3>
                        <p> This application helps you manage
                        a collection of books efficiently.</p>
                        <div className="icons">
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                        <FontAwesomeIcon className="icons" icon={faReact} />
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={webcrawler} alt="Project Image" className="project-image" />
                        <h3>Web Crawler</h3>
                        <p>A program that browses the web and collect information.</p>
                        <div className="icons">
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                        <FontAwesomeIcon className="icons" icon={faPython} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;