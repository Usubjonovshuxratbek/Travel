import React from 'react'
import './Travel.scss'
import { Fade } from 'react-reveal';

function Travel() {
    return (
        <section className='travel' id='travel'>
            <div className="container">
                <div className="travel__inner">
                    <Fade top>
                        <h1>Popular Tour Places</h1>
                    </Fade>
                    <div className="travel__cards">
                        <div className="travel__card">
                            <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
                            <h2>Nice building</h2>
                            <h3>dhaka,bangladesh</h3>
                            <h4>$2344<span>$3200</span></h4>
                        </div>
                        <div className="travel__card">
                            <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
                            <h2>Nice building</h2>
                            <h3>dhaka,bangladesh</h3>
                            <h4>$2344<span>$3200</span></h4>
                        </div>
                        <div className="travel__card">
                            <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
                            <h2>Nice building</h2>
                            <h3>dhaka,bangladesh</h3>
                            <h4>$2344<span>$3200</span></h4>
                        </div>
                        <div className="travel__card">
                            <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
                            <h2>Nice building</h2>
                            <h3>dhaka,bangladesh</h3>
                            <h4>$2344<span>$3200</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Travel
