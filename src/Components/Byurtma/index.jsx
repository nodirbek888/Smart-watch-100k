import React from 'react'
import {Container, Inputs, Wrapper} from './style'
import Button from '../Generic/Button/index'
const Byurtma = () => {
  return (
    <Container>
        <h1 className='title'>Byurtma berish</h1>
        <Wrapper>
            <Inputs>
            <input type="text" placeholder='Ismingizni kiriting'/>
            <input type="text" placeholder='Telefon raqamingizni kiriting'/>
            </Inputs>
            <select>
                <option>Manzilingizni tanlang</option>
                <option>Manzilingizni tanlang</option>
                <option>Manzilingizni tanlang</option>
            </select>
        <div className='btn'>
        <Button width={'300px'} height={'60px'}>Buyurtma berish</Button>
        </div>
        </Wrapper>
    </Container>
  )
}

export default Byurtma