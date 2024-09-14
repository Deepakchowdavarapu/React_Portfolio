import React from 'react';
import myResume from './../Resume/resume.png';

const Resume = () => {
    return (
        <div className='resume'>
            <h1>Resume</h1>

            <div className="resumebox">
                <img src={myResume} alt="" className="blurred-image" height="500px" width="500px"/>
                <div className='resumebtn'>Peek In</div>
            </div>
        </div>
    );
};

export default Resume;