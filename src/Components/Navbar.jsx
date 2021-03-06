import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'

const myNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" fixed="top" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">Rajesh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default myNavbar