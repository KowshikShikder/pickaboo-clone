import React from 'react'
import './Title.css'



export default function Title(props) {

    const {text, className } = props

    return (
        <>
            <div className={`title ${className}`} >
                <span> {text} </span>
            </div>
        </>
    )
}
