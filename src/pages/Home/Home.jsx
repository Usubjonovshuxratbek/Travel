import React from 'react'
import Header from '../../components/Header/Header'
import Travel from '../../components/Travel/Travel'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Service from '../../components/Service/Service'
import Partners from '../../components/Partners/Partners'
import Photos from '../../components/Photos/Photos'

function Home() {
  return (
    <div>
      <Header />
      <Travel />
      <Partners />
      <About />
      <Service />
      <Photos />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
