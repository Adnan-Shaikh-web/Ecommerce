import React from 'react'
import Slider from "react-slick";
import slide1 from '../../assets/images/slideBanner1.jpg'
import slide2 from '../../assets/images/slideBanner2.jpg'

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };
    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src={slide1} className='w-100' />
                </div>
                <div className="item">
                    <img src={slide2} className='w-100' />
                </div>
                <div className="item">
                    <img src={slide1} className='w-100' />
                </div>
                <div className="item">
                    <img src={slide2} className='w-100' />
                </div>
            </Slider>

        </div>
    )
}

export default HomeBanner
