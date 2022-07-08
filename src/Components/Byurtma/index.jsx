import React from 'react'
import {Container, Inputs, Wrapper} from './style'
import Button from '../Generic/Button/index'
import { Select } from 'antd';
import { Input } from 'antd';
const { Option } = Select;

const Byurtma = () => {
  return (
    <Container>
        <h1 className='title'>Byurtma berish</h1>
        <Wrapper>
            <Inputs>
            <input type="text" placeholder='Ismingizni kiriting'/>
            <input type="text" placeholder='Telefon raqamingizni kiriting'/>
            </Inputs>
              <div className='SelecrtWrapper'>
              <Select
    showSearch
    style={{
      width: 400,
    }}
    placeholder="Manzilni tanlang"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Toshkent</Option>
    <Option value="2">Samarqand</Option>
    <Option value="3">Xorazm</Option>
    <Option value="4">Namangan</Option>
    <Option value="5">Buxoro</Option>
    <Option value="6">Andijon</Option>
  </Select>
              </div>
        <div className='btn'>
        <Button width={'300px'} height={'60px'}>Buyurtma berish</Button>
        </div>
        </Wrapper>
    </Container>
  )
}

export default Byurtma