import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DEPRESSION from '../components/MH-Depression/Depression'
import DepressionSection from '../components/MH-Depression/DepressionSection'
import ContactForm2 from '../components/contact/Contact2'
import Insurance from '../components/insurance/InsuranceSection'


const Depression = () => {
  return (
    <>
    <Navbar /> 
    <DEPRESSION />
    <DepressionSection />
    <Insurance />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Depression