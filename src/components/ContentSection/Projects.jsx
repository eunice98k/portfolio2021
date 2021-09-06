import React from 'react';
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Title from '../title'

function Projects({projects}) {
    var projList = projects.map(({id, image, title, technologies, live, source, description}, i) => (
            <div className="projects-column">
                <div className="projects-content">
                  <Fade left delay={500} duration={1000}>
                         <img width='100%' height='100%' src={image} alt="img"/>
                  </Fade>
                  <Fade left delay={500} duration={1000}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>Technologies: <i>{technologies}</i></p>
                    {source && <a href={source} className="link-wbackground">Source Code</a>}
                    {live && <a href={live} className="link-wbackground">See Live</a>}
                  </Fade>
                </div>
            </div>
    ))

    return(
        <main className="projects-row">
            <Container fluid>
                <Title title="PROJECTS" />
                <div className="project-list">
                    {projList}
                </div>
            </Container>
        </main>
    )
};
export default Projects;
