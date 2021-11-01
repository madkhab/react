import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import londonImg from '../assets/london.jpeg';
import peopleImg from '../assets/people.jpeg';

export default class CarouselBox extends Component {
    render() {
        return (
                <Carousel>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ londonImg }
                        alt="London"
                        />
                        <Carousel.Caption>
                            <h3>London Image</h3>
                            <p>London London London London London London</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ londonImg }
                        alt="London"
                        />
                        <Carousel.Caption>
                            <h3>London Image</h3>
                            <p>London London London London London London</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ peopleImg }
                        alt="People"
                        />
                        <Carousel.Caption>
                            <h3>People Image</h3>
                            <p>People People People People People People</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        )
    }
}