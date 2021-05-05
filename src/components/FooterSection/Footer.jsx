import React from 'react';
import { Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-scroll';

function Footer({contacts}) {
    const social = contacts.socialMedia.map((item) =>
        <a href={item.url}>
            <div style={{color:item.hover}}>
                <div className='icon'>
                    {item.icon}
                </div>
            </div>
        </a>
    )
    const footerList = contacts.socialMedia.map(({icon, url, hover}, i) => (
        <a href={url}>
            <div style={{color:hover}}>
                <i className={`fa fa-${icon}`} aria-hidden="true"></i>
            </div>
        </a>
    ))
    return (
        <footer className='footer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Container>
                <div className="footer-go-top">
                    <Link to="hero" smooth duration={1000}>
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                    </Link>
                </div>
                <div className='footer-social'>
                    {footerList}
                </div>

                <hr />
                    <p className="footer-text">
                    © {new Date().getFullYear()} Eunice Kim
                </p>
            </Container>
        </footer>
    )

}
export default Footer