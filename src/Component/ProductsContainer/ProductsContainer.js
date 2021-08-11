import React from 'react'
import './ProductsContainer.css'
import Product from './Product'
import Smartphone from './ProductsData/SmartphonesData.json'
import MobileAccessories from './ProductsData/MobileAccessoriesData.json'
import LaptopAccessories from './ProductsData/LaptopData.json'
import ComputerAccessories from './ProductsData/ComputerData.json'
import Lifestyle from './ProductsData/LifestyleData.json'
import Electronics from './ProductsData/ElectronicsData.json' 
import { Swiper, SwiperSlide } from 'swiper/react';




export default function ProductSlide(props) {
    const {Data}  = props

    return (
        <>
            <Swiper
                className="product-container"
                spaceBetween={7}
                    breakpoints={{
                        // when window width is >= 640px
                        0: {
                        slidesPerView: 2,
                        },

                        // when window width is >= 620px
                        620: {
                        slidesPerView: 2,
                        },

                        // when window width is >= 780px
                        780: {
                        slidesPerView: 4,
                        },

                        // when window width is >= 1075px
                        1075: {
                            slidesPerView:6
                        }
                    }}
                >
                
                {   Data === "Smartphone" ? Smartphone.map( (x) => <SwiperSlide  className="product"> <Product image={x.image} title1={x.title1} title2={x.title2} rating={x.rating} price={x.price} xPrice={x.xPrice} />  </SwiperSlide>) : 
                    Data === "MobileAccessories" ? MobileAccessories.map( (x) => <SwiperSlide  className="product"> <Product image={x.image} title1={x.title1} title2={x.title2} rating={x.rating} price={x.price} xPrice={x.xPrice} />  </SwiperSlide>) : 
                    Data === "LaptopAccessories" ? LaptopAccessories.map( (x) => <SwiperSlide  className="product"> <Product image={x.image} title1={x.title1} title2={x.title2} rating={x.rating} price={x.price} xPrice={x.xPrice} />  </SwiperSlide>) : 
                    Data === "ComputerAccessories" ? ComputerAccessories.map( (x) => <SwiperSlide  className="product"> <Product image={x.image} title1={x.title1} title2={x.title2} rating={x.rating} price={x.price} xPrice={x.xPrice} />  </SwiperSlide>) : 
                    Data === "Lifestyle" ? Lifestyle.map( (x) => <SwiperSlide  className="product"> <Product image={x.image} title1={x.title1} title2={x.title2} rating={x.rating} price={x.price} xPrice={x.xPrice} />  </SwiperSlide>) : 
                    Data === "Electronics" ? Electronics.map( (x) => <SwiperSlide  className="product"> <Product image={x.image} title1={x.title1} title2={x.title2} rating={x.rating} price={x.price} xPrice={x.xPrice} />  </SwiperSlide>) : ""
                }
                
                
                


            </Swiper>
        </>
    )
}
