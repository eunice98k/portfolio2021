import React from "react"
import Projects from "../components/ContentSection/Projects"
import Navigation from "../components/NavSection/Nav"
import '../style/main.scss';
import {projects, contacts} from '../data/data'

const ProjectsPage = () => {
  return (
    <div>
      <Navigation />
      <Projects projects={projects}/>
    </div>
    
  )
}

export default ProjectsPage
