import React from 'react'
import Rating from '@material-ui/core/Rating'
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Product(props) {

    const {image, title1, title2, rating, price, xPrice} = props

    return (
                <div>
                    <div className="image">  <img src={`${window.location.origin}/pickaboo-clone/images/${image}`} alt=""/>  </div>
                    
                    <div className="product-rating"> 
                        {rating ? <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly /> : "" } 
                    </div>

                    <div className="product-title">
                        <p> {title1} </p>
                        <p> {title2} </p>
                    </div>

                    <div className="product-price"> <div>  ৳ <span> {price} </span> </div> {xPrice ? <div> ৳ <span> {xPrice} </span> </div> : "" } </div>
                </div>
    )
}
