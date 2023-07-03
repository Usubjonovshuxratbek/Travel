import React from 'react'
import './Contact.scss'
import { Fade } from 'react-reveal';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__inner">
          <h2>Savol Va Takliflar Uchun</h2>
          <div className="block">
            <div className="location">
              <div className="icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="info">
                <h2>Manzil:</h2>
                <p>Toshkent, O'zbekiston</p>
              </div>
            </div>
            <div className="phone">
              <div className="icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="info">
                <h2>Telefon:</h2>
                <p><a href="tel:+998955022000">+998 95 502-20-00</a></p>
              </div>
            </div>
            <div className="mail">
              <div className="icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="info">
                <h2>Email:</h2>
                <p><a href="mailto:info@salaam.uz">info@salaam.uz</a></p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form className='form' action="/">
              <div className="row">
                <div className="form-group col-md-6">
                  <input type="text" name="name" class="form-control" id="first-name" placeholder="Ism" required="required" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" name="name" class="form-control" id="first-name" placeholder="Telefon" required="required" />
                </div>
                <div class="form-group col-md-12">
                  <textarea rows="6" name="message" class="form-control" id="description" placeholder="Xabar" required="required"></textarea>
                </div>
              </div>
              <Fade bottom>
              <input type="submit" value="Xabar yuborish" name="submit" className='submit' title="Xabar yuborish" />
              </Fade>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
