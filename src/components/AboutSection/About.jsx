import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Title from '../title'

function About({about}) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 768) {
            setIsMobile(true);
            setIsDesktop(false);
        }
        else {
            setIsDesktop(true);
            setIsMobile(false);
        }
    }, []);

    const aboutSec = about.aboutme.map((index) => (
        <p>{index}</p>
    ))
    
    return (
        <main id='about' className='about-row'>
            <Container>
                <Title title="ABOUT ME"/>
                    <div className='about-content'>
                        {/* <Col sm={12} md={6}>
                            <Fade left={isDesktop} bottom={isMobile} duration={800} delay={300} distance="300px">
                                <div className="about-picture">
                                    <img className="about-image" src={about.image} alt="profile"/>
                                </div>
                            </Fade>
                        </Col>
                        <Col sm={12} md={6}>
                            <Fade left={isDesktop} bottom={isMobile} duration={800} delay={600} distance="300px">
                                <p className="about-body">{aboutSec}</p>
                                <a className='link-cbackground' href={about.resume}>RESUME</a>
                            </Fade>
                        </Col> */}
                        <div className='about-column'>
                            <Fade left={isDesktop} bottom={isMobile} duration={800} delay={300} distance="300px">
                                <img className="about-image" src={about.image} alt="profile"/>
                            </Fade>
                        </div>
                        <div className='about-column'>
                            <Fade left={isDesktop} bottom={isMobile} duration={800} delay={600} distance="300px">
                                <p className="about-body">{aboutSec}</p>
                                <a className='link-cbackground' href={about.resume}>RESUME</a>
                            </Fade>
                        </div>
                    </div>
            </Container>
        </main>
    )
}
export default About;