import React, { useState, useEffect }  from 'react';
import Fade from 'react-reveal/Fade';
import { Router, Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import IntroImg from '../../images/intro.png';

const Header = () => {
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

    return (
        <section id="hero">
            <Container>
                <Fade left>
                    <img className="hero-image" src={IntroImg} alt="profile"/>
                </Fade>
                <div className="hero-name">
                    <Fade right>
                        <p>Eunice Kim</p>
                    </Fade>
                </div>
                <div className="hero-sub">
                    <Fade right>
                        <p>
                            Senior Electrical Engineering student at the University of British Columbia
                            interested in Software Development, Observability, and Open Source Projects.
                        </p>
                    </Fade>
                </div>

           
                <Fade right={isDesktop} bottom={isMobile}>
                    <h1 className="hero-next">
                        <a className="link-wbackground" href="/about">Learn More</a>
                    </h1> 
                </Fade>

            </Container>
        </section>
    );
};

export default Header;