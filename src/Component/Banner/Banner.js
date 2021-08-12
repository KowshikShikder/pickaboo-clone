import React from 'react'
import './Banner.css'




export default function Banner(props) {

    const {img}= props
    return (
        <>
            <div className="banner banner-smartphone">
                <img src={`${window.location.origin}/pickaboo-clone/images/${img}`} alt=""/>
                <div className="banner-shadow"></div>
            </div>
            
        </>
    )
}
