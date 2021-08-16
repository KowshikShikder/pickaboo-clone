import React from 'react'
import Rating from '@material-ui/core/Rating'


export default function TrendyItem(props) {


    const {image, title1, rating, price, xPrice, discount} = props


    return (
        <>
            <div className="trendy-product-main">
                <div className="trendy-product">
                    <div className="trendy-product-image">  <img src={`${window.location.origin}/pickaboo-clone/images/${image}`} alt=""/>   </div>

                    <div className="trendy-product-description">  
                        <div className="trendy-title"> {title1}  </div>
                        <div className="product-price"> <div>  ৳ <span> {price} </span> </div> {xPrice ? <div> ৳ <span> {xPrice} </span> </div> : "" }  </div>
                        <div className="trendy-rating"> <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />  </div>

                    </div>
                </div>
            </div>
        </>
    )
}
