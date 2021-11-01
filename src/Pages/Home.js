import React, { Component } from 'react';
import { Card, CardDeck, Container, Button, CardGroup} from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';


export  default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Out team</h2>
                <CardGroup className="m-4">
                    <Card border="primary">
                        <Card.Img
                        variant="top" 
                        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dui.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                    <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dui.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img
                        variant="bottom" 
                        src="https://images.pexels.com/photos/7647938/pexels-photo-7647938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                       
                    </Card>
                    <Card>
                        <Card.Img
                        variant="top" 
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dui.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    
                </CardGroup>
            </Container>
            </>
        );
    }
}