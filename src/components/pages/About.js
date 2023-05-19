import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About(){
    return(<main id="about" className="container">

        <Container fluid className="container" >
            <h2 className="page-title">About Me</h2>
        <Row>
        <Col xs={6} md={4}>
          <Image className="img-fluid" src={process.env.PUBLIC_URL+"/Assets/Jancy's Headshot.JPG"} rounded />
        </Col>
          <Col xs={6} md={4}>
            <section className="about-text">
            <p>I'm a leader in the Financial Services industry. I've held roles in Technical Project Management, Mergers & Acquisitions, Cybersecurity, and Testing. I've also completed fullstack web applications using skills in both front and back-end development.</p>
          </section>
            </Col>
        </Row>
      </Container>
    </main>
    )
}

export default About;