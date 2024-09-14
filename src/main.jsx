import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/NavBar/Navbar'
import Intro from './Components/Intro/Intro'
import WhatIDo from './Components/WhatIDo/whatIdo'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import Academics from './Components/Academics/Academics'
import Find from './Components/Findme/Findme'
import Projects from './Components/Projects/Projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Intro/>
    <WhatIDo/>
    <Projects/>
    <Academics/>
    <Contact/>
    <Find/>
  </StrictMode>,
)
