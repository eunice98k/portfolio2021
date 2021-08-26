import React, { useContext, useState, useEffect }  from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';

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
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                    <h1 className="hero-title">
                        Hi, my name is{' '} 
                        <span className="hero-colour">Eunice</span>
                        {' '}🐯
                        <br />
                        I'm a Software Developer, Designer, and Electrical Engineering student at UBC.
                    </h1>
                </Fade>

                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <h1 className="hero-next">
                        <span className="link-wbackground">
                            <Link to="about" smooth duration={1000}>Learn More</Link>
                        </span>
                    </h1> 
                </Fade>
            </Container>
        </section>
    );
};

export default Header;