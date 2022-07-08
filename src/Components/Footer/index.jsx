import React from 'react'
import { Container, Wrapper } from './style'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <p className='small-description'>Mening kabinetim</p>
            <p className='small-description'>Mening sevimlilarim</p>
        </Wrapper>
        <Wrapper>
            <p className='small-description'>Biz haqimizda</p>
        </Wrapper>
        <Wrapper>
            <p className='small-description'>Aloqa uchun</p>
        </Wrapper>
        <Wrapper>
            <p className='small-description'>Ommaviy oferta</p>
        </Wrapper>
    </Container>
  )
}

export default Footer