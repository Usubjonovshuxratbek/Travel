import React from 'react'
import './Photos.scss'
import ImgOne from '../../assets/img/img-1.jpg'
import ImgTwo from '../../assets/img/img-2.jpg'
import ImgThree from '../../assets/img/img-3.jpg'
import ImgFour from '../../assets/img/img-4.jpg'
import ImgFive from '../../assets/img/img-5.jpg'
import ImgSix from '../../assets/img/img-6.jpg'
import { Link } from 'react-router-dom'

function Photos() {
  return (
    <section className='photo'>
      <div className="container">
        <div className="section-title">
          <h2>Rasmlar</h2>
        </div>
        <div className="photo__inner">
          <Link to='/'><img src={ImgOne} alt="" /></Link>
          <Link to='/'><img src={ImgTwo} alt="" /></Link>
          <Link to='/'><img src={ImgThree} alt="" /></Link>
          <Link to='/'><img src={ImgFour} alt="" /></Link>
          <Link to='/'><img src={ImgFive} alt="" /></Link>
          <Link to='/'><img src={ImgSix} alt="" /></Link>
        </div>
      </div>
    </section>
  )
}

export default Photos
