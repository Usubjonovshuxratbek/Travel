import React from 'react'
import './Travel.scss'
import Slider from './Slider/Slider'

function Travel() {
    return (
        <section className='travel'>
            <div className="container">
                <div className="travel__inner">
                    <h1>Popular Tour Places</h1>
                        <Slider />
                </div>
            </div>
        </section>
    )
}

export default Travel
