import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slider.json'

//Just import those which have to implement
import SwiperCore, { Navigation, Pagination,  Autoplay, EffectFade } from 'swiper';

// initiate implements 
SwiperCore.use([Navigation, Pagination , Autoplay,  EffectFade ]);



if(window.innerWidth <= 770 ){

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
    document.getElementById('slider-container').style.marginTop="150px"

    }
    else{
    document.getElementById('slider-container').style.marginTop="0px"
    }
})
}







export default function Slider() {

    const Slider= Slide.map( (img)=>{
        return <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/pickaboo-clone/images/${img.slide}`} alt=""/></SwiperSlide>
    } )


    
    return (
        <div className="slider-container" id="slider-container">
            <Swiper
                className="gallery"
                spaceBetween={1} //space between slides
                speed={600} //slide’s transition speed
                autoplay={{ delay: 4500 }} //enable auto slide and set delay
                slidesPerView={1} //slide to show at a time
                navigation //show navigation
                loop="true" //enable loop
                effect="fade" //effect if sliding [ fade, cube, flip, coverflow ]
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                pagination
                >

                    {Slider}

            </Swiper>

        </div>
    )
}
