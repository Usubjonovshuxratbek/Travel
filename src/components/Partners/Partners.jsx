import React from 'react'
import PartnerOne from '../../assets/img/partner-1.png'
import PartnerTwo from '../../assets/img/partner-2.png'
import PartnerThree from '../../assets/img/partner-3.png'
import PartnerFour from '../../assets/img/partner-4.png'
import PartnerFive from '../../assets/img/partner-5.png'
import './Partners.scss'

function Partners() {
    return (
        <div className='partners'>
            <div className="container">
                <div className="partners__inner">
                    <img className='img-1' src={PartnerOne} alt="" />
                    <img className='img-2' src={PartnerTwo} alt="" />
                    <img className='img-3' src={PartnerThree} alt="" />
                    <img className='img-4' src={PartnerFour} alt="" />
                    <img className='img-5' src={PartnerFive} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners
