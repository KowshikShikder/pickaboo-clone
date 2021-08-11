import React from 'react'
import './Title.css'



export default function Title(props) {

    const {text} = props

    return (
        <>
            <div className="title">
                <span> {text} </span>
            </div>
        </>
    )
}
