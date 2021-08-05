import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Education from './components/Education';
import Skill from './components/Skill';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Achievements from './components/Achievements';

function App() {
  AOS.init()
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
