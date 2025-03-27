import React from 'react'
import Banner from '../components/banner'
import Doctors from '../components/doctors'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'


const home = () => {
  return (
    <div>
      <Banner/>
      <Doctors/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
export default home
