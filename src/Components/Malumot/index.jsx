import React from 'react'
import {Container,Wrapper,Description,Img} from './style'
import Photo1 from '../../assets/imgs/main-watchs2.png'
import Photo2 from '../../assets/imgs/energy.png'
const Malumot = () => {
  return (
    <Container>
        <h1 className='title'>Mukammalik va qulayliklari</h1>
        <Wrapper>
            <Description>
                <h1 className='sub-title'>Smart soatlarning ekran mavzulari soatning jozibaliroq ko’rsatadi.
                </h1>
                <p className='description'>
                Wearfit ilovasi orqali siz smart soatingiz ekrani uchun 2,000 dan ortiq mavzularni yuklab olishingiz mumkin.
                </p>
            </Description>
            <Img src={Photo1}/>
        </Wrapper>
        <Wrapper>
            <Img src={Photo2}/>
            <Description>
                <h1 className='sub-title'>Smart soatlarning quvvat tejash funktsiyalari 
                </h1>
                <p className='description'>
                Saotlar 2 soatlik quvvat olgandan so‘ng 78 soatgacha sizning salomatligingiz uchun xizmat qiladi.
                </p>
            </Description>
        </Wrapper>
    </Container>
  )
}

export default Malumot