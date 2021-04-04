import React from 'react'
import './index.css' 
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide'
import './App.css';
import Navbar from './Components/Navbar'
import Coursel from './Components/Coursel'
import TitleMessage from './Components/title-message'
import About from './Pages/About'
import Container from "react-bootstrap/Container";
import Skills from './Pages/Skills'
import Project from './Components/project';
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
 
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
    <Navbar/>
    <Coursel/>
    <TitleMessage/>
    <Parallax
          blur={{ min: -1000, max: 1000 }}
          bgImage={require("./Assests/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Project/>
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Contact/>
        </Slide>
      </Container>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
