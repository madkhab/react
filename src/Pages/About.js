
import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
           <Container>
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Design
                                    </Nav.Link>
                                    <Nav.Link eventKey="second">
                                        Team
                                    </Nav.Link>
                                    <Nav.Link eventKey="third">
                                        Programming
                                    </Nav.Link>
                                    <Nav.Link eventKey="fourth">
                                        Framewoworks
                                    </Nav.Link>
                                    <Nav.Link eventKey="fifth">
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://cdn.dribbble.com/users/702789/screenshots/14012516/media/561a8b7e8cbe51c72c18f4ef0dc72676.png?compress=1&resize=400x300" alt="design"/>
                                    <p>Your reader may be reading on a screen, and eye-tracking studies have shown us that high-literacy readers tend to scan screens for the family</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://i.insider.com/56a4f5c058c3231a008b4b66?width=600&format=jpeg&auto=webp" alt="team"/>
                                    <p>Your reader may be reading on a screen, and eye-tracking studies have shown us that high-literacy readers tend to scan screens for the family</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img width={600} height={350} src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg"/>
                                    <p>Your reader may be reading on a screen, and eye-tracking studies have shown us that high-literacy readers tend to scan screens for the family</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img src="https://www.deepcrawl.com/wp-content/uploads/2019/07/javascript-frameworks.png" alt="frameworks"/>
                                    <p>Your reader may be reading on a screen, and eye-tracking studies have shown us that high-literacy readers tend to scan screens for the family</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img src="https://rubygarage.s3.amazonaws.com/uploads/article_image/file/812/js-frameworks.jpg" alt="libraries"/>
                                    <p>Your reader may be reading on a screen, and eye-tracking studies have shown us that high-literacy readers tend to scan screens for the family</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
               </Tab.Container>
           </Container>
        )
    }
}