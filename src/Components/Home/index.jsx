import React from 'react'
import {Container,Wrapper,Img} from './style'
import HomeImg from '../../assets/imgs/main-watchs.png'
import Button from '../Generic/Button'

const Home = () => {
  return (
    <Container>
        <h1 className='title home-title'>Smart watch Hw56 Plus</h1>
        <Wrapper>
            <h1 className='title'>340,000</h1>
            <p className='sub-title'>so'm</p>
        </Wrapper>
        <Img src={HomeImg}></Img>
            <Button width = {'300px'} height={'60px'}>Buyurtma berish</Button>
    </Container>
  )
}

export default Home