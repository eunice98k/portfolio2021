import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-scroll';
import Resume from '../../downloads/resume2021.pdf';

const Navigation = () => {
  return (
    <header>
      <Container>
        <Navbar collapseOnSelect fixed='top' expand='md' bg='light' variant='light'>
          <Navbar.Brand href="/">E.</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <a className="nav-link" rel="noopener noreferrer" href={Resume} target="_blank">Resume</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Navigation;