import React from 'react'
import './TrendyProduct.css'
import Product from './TrendyItem'
import Trendy from './Trendy.json'


const Data = Trendy.map((x)=>
    <Product image={x.image} title1={x.title1} title2={x.title2} rating={x.rating} price={x.price} xPrice={x.xPrice} />
)


export default function TrendyProduct() {
    return (
        <>
            <div className="trendy-product-container">
                
                {Data}

            </div>

        </>
    )
}
