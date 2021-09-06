import React from "react"
import About from "../components/AboutSection/About"
import Footer from "../components/FooterSection/Footer"
import Navigation from "../components/NavSection/Nav"
import '../style/main.scss';
import { about, contacts} from '../data/data'

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <About about={about}/>
      <Footer contacts={contacts}/>
    </div>
    
  )
}

export default AboutPage
