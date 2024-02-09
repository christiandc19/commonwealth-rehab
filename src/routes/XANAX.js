import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import XANAX from '../components/Addiction-Xanax/Xanax'
import XanaxSection from '../components/Addiction-Xanax/XanaxSection'
import ContactForm2 from '../components/contact/Contact2'
import Insurance from '../components/insurance/InsuranceSection'


const Xanax = () => {
  return (
    <>
    <Navbar /> 
    <XANAX />
    <XanaxSection />
    <Insurance />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Xanax