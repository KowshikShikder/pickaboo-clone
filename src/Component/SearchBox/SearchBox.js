import React from 'react'
import './SearchBox.css'

export default function SearchBox() {
    return (
        <>
            <div className="search-box-main">
                <div className="search-box-logo">  <img src={`${window.location.origin}/images/PickabooLogoSearch.png`} alt=""/>  </div>


                <div className="search-box-search"> <input type="text" placeholder="Search entire store here..." /> 
                    <div className="search-icon"> <i className="fas fa-search"></i>  </div>  
                </div>


                <div className="search-box-cart">    
                    <div className="cart-icon"> <i className="fas fa-shopping-cart"></i>   </div>
                    <div className="cart-button btn"> My Cart <div> <span>0</span> </div> </div>
                
                </div>


                <div className="search-box-account">    
                        <div> <i className="fas fa-unlock"></i>  <p> Log In  </p> </div>
                        <div> <i className="fas fa-key"></i>  <p> Register  </p> </div>
                </div>
            </div>



        </>
    )
}
