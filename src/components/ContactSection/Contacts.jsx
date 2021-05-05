import React from 'react';
import { Container, Row,Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Title from '../title'

function Contact({contacts}) {

    function sendMail(message){
        const body = message.target["body"].value;
        const firstName = message.target["firstName"].value;
        const lastName = message.target["lastName"].value;
        console.log(body);
        console.log(firstName);
        window.location.href = `mailto:${contacts.email}?body=${ encodeURIComponent(message)}`;
    }
    
    return (
        <section id='contact' className='contact'>
            <Container>
                <Title title="Get in Touch"></Title>
                <form onSubmit={sendMail}>
                    <Row>
                        <Col className='form_inputWrap' sm={6}>
                            <label htmlFor='fname'>First Name</label>
                            <input className='form-input' type='text' id='fname' name='firstname' placeholder="Enter your first name"></input>
                        </Col>
                        <Col className='form_inputWrap' sm={6}>
                            <label htmlFor='lname'>Last Name</label>
                            <input className='form-input' type='text' id='lname' name='lastname' placeholder="Enter your last name"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='form_inputWrap'>
                            <label htmlFor='email'>Email</label>
                            <input className='form-input' type='text' id='email' name='email' placeholder="Enter your email"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='form_inputWrap'>
                            <label htmlFor='message'>Message</label>
                            <input className='form-input' type='text' id='message' name='message' placeholder="Enter your message"></input>
                        </Col>
                    </Row>
                    <input className='form-send' type='submit' value='Send Message'></input>
                </form>
            </Container>
        </section>
    )
}

export default Contact