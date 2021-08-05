import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Education from './components/Education';
import Skill from './components/Skill';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Achievements from './components/Achievements';

/*
TODO:
1- Add 3d effect to each info box ==> DONE
2- Consider making font bigger ==> it does looks better
3- Find style to align skill ==> used md and sm
4- Education might be too long ==> Reduced gap
5- Add achievement => DONE
6- clean css => done
7- clear some margin => done
8- publish it on GitHub
*/

function App() {
  AOS.init()
  const [expanded, setExpanded] = useState(false);
  return (
    <>
    <MyNavbar />
    <Profile id="profile"/>
    <Education id="education"/>
    <Experience id="experience"/>
    <Skill id="skill"/>
    <Achievements id="achievements"/>
    </>
  );
}

export default App;
