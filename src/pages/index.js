import React from "react"
import About from "../components/AboutSection/About"
import Header from "../components/HeroSection/Hero"
import Projects from "../components/ContentSection/Projects"
import Contact from "../components/ContactSection/Contacts"
import Footer from "../components/FooterSection/Footer"
import Nav from "../components/NavSection/Nav"
import '../style/main.scss';
import {nav, about, projects, contacts} from '../data/data'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <About about={about}/>
      <Projects projects={projects}/>
      <Contact contacts={contacts}/>
      <Footer contacts={contacts}/>
    </div>
    
  )
}

export default IndexPage
