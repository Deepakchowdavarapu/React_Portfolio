import React from 'react';
import './Academics.css';

const Academics = () => {
    return (
        <div>
            <section className="qualifications">
                <h1 className='academicsh1'>Academic Qualifications</h1>
                <div className="timeline">
                    <div className="entry">
                        <div className="date">JULY 2023 - PRESENT</div>
                        <div className="details">
                            <h2>B.Sc in Computer Science</h2>
                            <p>Scaler School Of Technology,Bengaluru</p>
                            <p>Online BSc Degree from Bits Pilani,Hyderabad</p>
                        </div>
                    </div>
                    <div className="entry">
                        <div className="date">APR 2020 - JUL 2022</div>
                        <div className="details">
                            <h2>Intermmediate Studies</h2>
                            <p>New Vision College ,Telangana</p>
                            <p>957/1000 (MPC)</p>
                            <p>97.3 Percentile (JEE Mains)</p>
                        </div>
                    </div>
                    <div className="entry">
                        <div className="date">APR 2007 - APR 2020</div>
                        <div className="details">
                            <h2>HighSchool Stats</h2>
                            <p>New Vision School ,Telangana</p>
                            <p>Grade : 10/10 (Stateboard)</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;