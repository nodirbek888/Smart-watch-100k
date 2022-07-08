import { Collapse } from 'antd';
import React from 'react';
import {Conatiner} from './style'
const { Panel } = Collapse;

const Savol = () =>{
  const onChange = (key) => {
    console.log(key);
  };
  return(
    <Conatiner>
      <h1 className='title'>Savollarga javob</h1>
      <div className='accordion'>
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
    <Panel className='description' header="Ushbu mahsulot qaysi davlatda ishlab chiqarilgan?" key="1">
    <p className='small-description'>Ushbu maxsulot rossiya davlatida ishlab chiqarilhgan.</p>
    </Panel>
    <Panel className='description' header="Ushbu mahsulot qaysi davlatda ishlab chiqarilgan?" key="2">
    <p className='small-description'>Ushbu maxsulot rossiya davlatida ishlab chiqarilhgan.</p>
    </Panel>
    <Panel className='description' header="Ushbu mahsulot qaysi davlatda ishlab chiqarilgan?" key="3">
    <p className='small-description'>Ushbu maxsulot rossiya davlatida ishlab chiqarilhgan.</p>
    </Panel>
  </Collapse>
      </div>
    </Conatiner>
  )
}

export default Savol