import React, { useState, useEffect }  from 'react';
import { Container, Row,Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import Title from '../title'

function Projects({projects}) {
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

    const projList = projects.map(({id, image, title, technologies, live, source, description}, i) => (
        <Row className='projects-row' key={id}>
            <Col className='projects-col' sx={6}>
                <Fade left={i%2===0} right={i%2!==0 } delay={500} duration={1500}>
                    <Tilt className="projects-tilt"
                        options={{
                            reverse:        false,
                            max:            8,
                            perspective:    1000,
                            scale:          1,
                            speed:          300,
                            transition:     true,
                            reset:          true,
                            easing:         "cubic-bezier(.03,.98,.52,.99)",
                        }}
                    >
                        <img width='100%' height='100%' src={image} alt="img"/>
                    </Tilt>
                </Fade>
            </Col>
            <Col className='projects-body' sx={6}>
                <Fade right={i%2===0} left={i%2!==0} delay={500} duration={1800}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>Technologies: <i>{technologies}</i></p>
                    {source && <a href={source} className="link-wbackground">Source Code</a>}
                    {live && <a href={live} className="link-wbackground">See Live</a>}
                </Fade>
            </Col>
        </Row>
    ))
    return(
        <section className="projects">
            <Container fluid>
                <Title title="PROJECTS" />
                <div className="project-list">
                    {projList}
                </div>
            </Container>
        </section>
    )
};
export default Projects;
