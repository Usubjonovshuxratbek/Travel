import React from 'react'
import './Service.scss'
import { Fade } from 'react-reveal';

function Service() {
    return (
        <div className='service'>
            <div className="container">
                <div className="service__inner">
                    <Fade top>
                        <div className="service__card">
                            <i className="fa fa-bookmark"></i>
                            <h4>Personalized matching</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="service__card">
                            <i className="fa fa-cubes" aria-hidden="true"></i>
                            <h4>Wide Variety Of Destinations</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="service__card">
                            <i className="fa fa-archive" aria-hidden="true"></i>
                            <h4>Highly Qualified Service</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="service__card">
                            <i className="fa fa-bar-chart" aria-hidden="true"></i>
                            <h4>Handpicked Hotels</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Fade>
                    <div className="service__card">
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <h4>Best Price Guarantee</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <Fade top>
                        <div className="service__card">
                            <i className="fa fa-users" aria-hidden="true"></i>
                            <h4>24/7 Support</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Service
