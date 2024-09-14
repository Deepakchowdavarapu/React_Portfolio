import React from 'react';
import './whatIdo.css';

const WhatIDo = () => {
    return (
        <div className='whatidopage'>
        <div className='whatido'>
            <h1>What I Do</h1>
        <p className='projectDes'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo, tenetur cumque provident, repudiandae obcaecati natus perferendis modi ipsum suscipit nobis, at fugit veritatis laboriosam corporis unde? Veniam, odio voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eveniet mollitia perspiciatis deserunt distinctio repellat saepe iste eaque culpa delectus, cupiditate non animi error rem ut ipsam provident in praesentium.</p>
        </div>

        <div className="projects">

        <div className="project">
            <img src="https://imgs.search.brave.com/j6wDiqSrRFDP94uhwRKdlhWIBQIlAFSR2Gs8DgWOs_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/MTgxX0phdmFfbG9n/b19sb2dvcy01MTIu/cG5n" alt="" />
            <div className="right">
                <span>DSA</span>
                <p> veniam soluta earum quam, sint, repudiandae, nulla ea? Iste nobis nihil sunt?</p>
                </div>
        </div>
        <div className="project">
          <img src="https://imgs.search.brave.com/WHcUYdirn_CqdUtRs1EgZ-NRdDJuEKuRNpVZQpfEgos/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kYXZp/ZHdhbHNoLm5hbWUv/ZGVtby9KYXZhU2Ny/aXB0TGlzdEltYWdl/LnBuZz9wcmV2aWV3" alt="" />
          <div className="right">
                <span>Web Development</span>
                <p> veniam soluta earum quam, sint, repudiandae, nulla ea? Iste nobis nihil sunt?</p>
          </div>
        </div>
        <div className="project">
        <img src="https://imgs.search.brave.com/KF1xJ3hlhVzhKvmIFpcyAkMcBHAN81JnWpBdZFyMKMg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92aXRl/c3QuZGV2L3ZpdGUu/c3Zn" alt="" />
            <div className="right">
                <span>App Development</span>
                <p> veniam soluta earum quam, sint, repudiandae, nulla ea? Iste nobis nihil sunt?</p>
                </div>
        </div>
        <div className="project">
        <img src="https://imgs.search.brave.com/W0MsqIRrITKMHIuXItStmJAv0MWA5KM5EB7jX66UxOE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vc3ByaW5n/Ym9vdC9pbWFnZXMv/c3ByaW5nLWJvb3Qt/dHV0b3JpYWwuanBn" alt="" />
            <div className="right">
                <span>Backend</span>
                <p> veniam soluta earum quam, sint, repudiandae, nulla ea? Iste nobis nihil sunt?</p>
                </div>
        </div>
    </div>
        </div>
    );
};

export default WhatIDo;