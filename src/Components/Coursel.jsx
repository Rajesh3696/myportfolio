import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Coursel.css'
import slide1 from '../Assests/img/carousal/slide1.webp'
import slide2 from '../Assests/img/carousal/slide2.webp'
import slide3 from '../Assests/img/carousal/slide3.webp'
import Scrolldown from './Scrolldown'

function Coursel() {
    return (
        <div>
            <Carousel controls={false} indicators interval={4000} pause={false}>
                <Carousel.Item >
                    <img
                        className="d-block w-100 custom-img"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 custom-img"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Scrolldown />
        </div>
    )
}

export default Coursel
