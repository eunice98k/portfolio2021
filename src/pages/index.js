import React from "react"
import Header from "../components/HeroSection/Hero"
import Projects from "../components/ContentSection/Projects"
import Contact from "../components/ContactSection/Contacts"
import Footer from "../components/FooterSection/Footer"
import Navigation from "../components/NavSection/Nav"
import '../style/main.scss';
import { projects, contacts } from '../data/data'

const IndexPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Projects projects={projects}/>
      {/* <Contact contacts={contacts}/> */}
      <Footer contacts={contacts}/>
    </div>
    
  )
}

export default IndexPage
