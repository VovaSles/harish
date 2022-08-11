import { Carousel } from 'react-bootstrap'
import React from 'react'
import kids from '../img/kids.jpg'

const Slider = () => {
    return (
        <Carousel >
            <Carousel.Item style={{ 'height': '650px' }}>
                <img
                    className='d-block w-100'
                    src={kids}
                    alt='first image'
                />
                <Carousel.Caption>
                    <h3>חוגים של א-ג</h3>
                    <p>מוזמנים להצתרף לכבוצות שלנו בחריש</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '650px' }}>
                <img
                    className='d-block w-100'
                    src={kids}
                    alt='first image'
                />
                <Carousel.Caption>
                    <h3>חוגים של א-ג</h3>
                    <p>מוזמנים להצתרף לכבוצות שלנו בחריש</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '650px' }}>
                <img
                    className='d-block w-100'
                    src={kids}
                    alt='first image'
                />
                <Carousel.Caption>
                    <h3>חוגים של א-ג</h3>
                    <p>מוזמנים להצתרף לכבוצות שלנו בחריש</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider