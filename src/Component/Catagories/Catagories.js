import React from 'react'
import './Catagories.css'



export default function Catagories() {
    return (
        <>
            <div className="category-parent">
                <div className="category">

                    <div className="category-img"> <img src={`${window.location.origin}/images/icon-smartphone.png`} alt="" />  </div>
                    <div className="category-name"> <p> Smartphones </p> </div>

                </div>
                
                <div className="category">

                    <div className="category-img"> <img src={`${window.location.origin}/images/icon-featurephone.png`} alt="" />  </div>
                    <div className="category-name"> <p> Feature Phones </p> </div>

                </div>

                <div className="category">

                    <div className="category-img"> <img src={`${window.location.origin}/images/icon-computer-accessories.png`} alt="" />  </div>
                    <div className="category-name"> <p> Computer Accessories </p> </div>

                </div>

                <div className="category">

                    <div className="category-img"> <img src={`${window.location.origin}/images/icon-electronics-appliance.png`} alt="" />  </div>
                    <div className="category-name"> <p> Electronics Appliance </p> </div>

                </div>

                <div className="category">

                    <div className="category-img"> <img src={`${window.location.origin}/images/icon-mobile-accessories.png`} alt="" />  </div>
                    <div className="category-name"> <p> Mobile Accessories </p> </div>

                </div>

                <div className="category">

                    <div className="category-img"> <img src={`${window.location.origin}/images/icon-lifestyle.png`} alt="" />  </div>
                    <div className="category-name"> <p> Lifestyle & Personal care </p> </div>

                </div>





            </div>
        </>
    )
}
