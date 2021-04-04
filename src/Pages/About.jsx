import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import profile from '../Assests/img/profile/profile.jpg'
import './About.css'

function About() {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Rajesh Kollipara</strong>
                                <br />A passionate developer born and brought up in India. I am a front end developer with React.js, Redux tech stack.
                  <br />
                  In 2019, I successfully completed my Post graduation with specialization in 'Master Of Computer Applications'.
                  <br />
                  Developed applications using React JS.
                  <br />
 Experience and expertise in Front End Web Development with experience in UI web applications
using HTML5, CSS3, Bootstrap, JavaScript, ES6, ReactJS, Ajax, JSON.<br />
 Experience in building reusable and customizable components for a website using ReactJS and ReactRoutes to create a Single Page Web Application.<br />
 Used Axios package to make promise-based HTTP requests and intercept all requests and responses
for authentication and error handling in React applications.<br />
 Experience in using JWT tokens, storing in local storage and accessing while making API calls.<br />
 Utilized the powerful new features of ES6 such as Arrow Functions, Promises, Classes, Modules,
Rest and Spread Parameters, Template Literals in React components.<br />
 Worked on ReactJS Virtual DOM and React views, rendering using components that contain
additional components called custom HTML tags, Have a great understanding of Document Object
Model.<br />
 Strong Knowledge on React Hooks.<br />
 Excellent problem-solving skills and always eager to learn evolving and new technologies.

                  <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1GJAvEOmHuqSjk_7GF6laQOCMxwU3_409/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Rajesh3696" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/rajesh-k-45714928" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
