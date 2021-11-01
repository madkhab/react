import React, { Component } from 'react';
import { Media, Container, Row, Col, ListGroup, ListGroupItem, Card } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col md={3}>
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                    </Col>
                    <Col md={6}>
                    <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus sodales erat,     vel maximus ex faucibus et. s                                Vestibulum in lobortis  felis, ultrices suscipit augue. Etiam dignissim, dui vitae laoreet interdum.</p>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flat">
                                <ListGroup.Item>Html/css</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                    </Col>
                    <Col md={3}>
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                    </Col>
                    <Col md={6}>
                    <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus sodales erat,     vel maximus ex faucibus et. s                                Vestibulum in lobortis  felis, ultrices suscipit augue. Etiam dignissim, dui vitae laoreet interdum.</p>
                    </Col>
                </Row>
                <Row>
                <Col md={3} className="mt-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                    </Col>
                    <Col md={6} className="mt-5">
                    <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus sodales erat,     vel maximus ex faucibus et. s                                Vestibulum in lobortis  felis, ultrices suscipit augue. Etiam dignissim, dui vitae laoreet interdum.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}