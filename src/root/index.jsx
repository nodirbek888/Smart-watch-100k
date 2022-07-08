import React from 'react'
import Home from '../Components/Home/index'
import Malumot from '../Components/Malumot/index'
import RasmlarBolimi from '../Components/RasmlarBolimi/index'
import Byurtma from '../Components/Byurtma/index'
import Batafsil from '../Components/Batafsil/index'
import Accordion from '../Components/Accordion'
import Sharhlar from '../Components/Sharhlar/index'
import Footer from '../Components/Footer/index'
const Root = () => {
  return (
    <div>
      <Home/>
      <Malumot/>
      <RasmlarBolimi/>
      <Byurtma/>
      <Batafsil/>
      <Accordion/>
      <Sharhlar/>
      <Byurtma/>
      <Footer/>
    </div>
  )
}

export default Root