import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About(){
    return(<main id="about" className="container">

        <Container fluid className="main-container" >
            <h2 className="page-title">About Me</h2>
        <Row>
        <Col xs={6} md={4}>
          <Image className="img-fluid" src={process.env.PUBLIC_URL+"/Assets/female stock image.jpg"} rounded />
        </Col>
          <Col xs={6} md={4}>
            <p>I like long walks on the beach</p>
          </Col>
        </Row>
      </Container>
    </main>
    )
}

export default About;