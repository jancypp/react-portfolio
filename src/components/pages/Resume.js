import React from "react";
import Container from 'react-bootstrap/Container';


import Accordion from 'react-bootstrap/Accordion';
function About() {
    return (<main id="about" className="container">

        <Container fluid className="container" >
            <h2 className="page-title">Resume</h2>


            <Accordion className="accordion-layout">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Front-end Proficiencies</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>responsive design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Back-end Proficiencies</Accordion.Header>
                    <Accordion.Body>
                    <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    <h3 className="text-center"><a className="download" href={process.env.PUBLIC_URL+"/Resume/Resume.pdf"} download>Download Resume</a></h3>
        </Container>
    </main>
    )
}

export default About;