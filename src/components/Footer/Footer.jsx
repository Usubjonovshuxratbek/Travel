import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <h6>© Copyright | Salaam Travel 2023. All Right Reserved <Link to='/'>ALLTEN</Link> </h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer
