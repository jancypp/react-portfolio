import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import projects from "./projects.json";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Portfolio() {
    // const [projects] = useState(projects)
    return (<main id="about" className="container">

        <Container fluid className="container" >
            <h2 className="page-title">Portfolio</h2>
            <main className="d-flex flex-wrap justify-content-evenly portfolio-container ">
                {projects.map((element, key) => {
                    return (
                        <Card className="m-2 p-3" key={key} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + element.screenshot} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    {element.description}
                                </Card.Text>
                                <Button className="btn m-1 p-1" variant="primary"><a className="download text-white" href={element.github}>Github</a></Button>
                                <Button className="btn m-1 p-1" variant="primary"><a className="download text-white" href={element.live}>Deployment</a></Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </main>
        </Container>
    </main>
    )
}

export default Portfolio;