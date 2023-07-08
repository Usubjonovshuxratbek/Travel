import React from 'react'
import './Hero.scss'
import { Fade } from 'react-reveal';

function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero__inner">
                    <Fade top>
                        <h1>Umra safarlarini <span>Makkah travel</span> bilan rejalashtiring</h1>
                    </Fade>
                    <Fade bottom>
                        <a href="/">Ariza Yuborish</a>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Hero
