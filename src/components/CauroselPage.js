import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselData } from '../utils/CarouselData';

function CauroselPage() {
    return (
        <div>
            <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} showThumbs={false} useKeyboardArrows={true} interval={3000}>
                {
                    CarouselData.map((data) => {
                        console.log(data.image)
                        return (
                            <div className='caurosel' key={data.index}>
                                <img src={`${data.image}`} alt='Interior living room' className='imagehome' />
                                <span className='carousel_content'>
                                    <span className=''><h1 className='carousel_title'>{data.title}</h1></span>
                                    <span className=''><h2 className='carousel_text'>{data.text}</h2></span>
                                    <span><button className='button'><h2 className='carousel_text'>View Portfolio</h2></button></span>
                                </span>
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default CauroselPage