import React from 'react'
import './Header.scss'
import Logo from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import Hero from '../Hero/Hero'

function Header() {
    let elInfo = document.querySelector('.info')
    const menuBtn = ()=> {
        elInfo.classList.toggle('info-res')
    }

    return (
        <header className='header'>
            <nav className='nav'>
                <div className="container">
                    <div className="nav__inner">
                        <div className="logo">
                            <a href="/"><img src={Logo} alt="" /></a>
                            <button onClick={menuBtn} className='humburger-btn'><i className="bi bi-justify"></i></button>
                        </div>
                        <div className="info">
                            <ul>
                                <li>
                                    <Link to='/'>Bosh Sahifa</Link>
                                    <Link to='/'>Sayohat</Link>
                                    <Link to='/'>Biz Haqimizda</Link>
                                    <Link to='/'>Rasmlar</Link>
                                    <Link to='/'>Mijozlar</Link>
                                    <Link to='/'>Jamoa</Link>
                                    <Link to='/'>Bog'lanish</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Hero />
        </header>
    )
}

export default Header
