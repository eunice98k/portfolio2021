import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-scroll';
import {Container} from 'react-bootstrap'

function Nav(){
    const [scroll, setScroll] = useState(null);
    const [fixed,setFixed] = useState(null);

    useEffect(()=>{
        const target = () => {
          if(scroll && window.scrollY>scroll) {
            setFixed(true);
          }
          else setFixed(false);
        };
        window.addEventListener('scroll',target) 
        return ()=> window.removeEventListener('scroll',target)
    }, [])

    const navbar = useRef(null);
    const links = useRef(null);
    useEffect(()=>{
        setScroll(navbar.current.getBoundingClientRect().top+ window.scrollY)
    },[navbar])
    
    const onClick = (item) =>{
        links.current.classList.toggle('show');
    }
    const onHide = (item) =>{
        links.current.classList.remove('show');
    }

    return (
        <nav >
            <Container>
                <div>
                    <Link to='hero' className='nav-main' smooth duration={1000}>
                    Eunice Kim
                    </Link>
                    <div  className="nav__links">
                        <ul className='nav__ul'>
                          <li>
                            <Link activeClass="nav__item--active" to="about"  className="nav__item" spy={true} duration={500} smooth={true} offset={-50}>about</Link>
                          </li>
                          <li>
                            <Link activeClass="nav__item--active" to="projects"  className="nav__item" spy={true} duration={500} smooth={true} offset={-50}>projects</Link>
                          </li>
                          <li>
                            <Link activeClass="nav__item--active" to="contact"  className="nav__item" spy={true} duration={500} smooth={true} offset={-50}>contact</Link>
                          </li>

                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Nav;