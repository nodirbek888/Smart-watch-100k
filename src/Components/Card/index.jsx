import React from 'react'
import { Container,Date, Icon, Wrapper } from './style'

const Card = (info) => {
  return (
    <Container>
        <Date>
            <h3 className='sub-title'>{info?.res || 'Ibrohim'}</h3>
            <p className='small-description'>{info?.res || '14.06.2022'}</p>
        </Date>
        <Wrapper>
            <p className='small-description text-center'>
            {
                info?.res || 'Mahsulotni uygacha yetkazib berish xizmat juda ham qulay ekan. Hw 56 plus smart soatini qulayliklari esa juda ham yuqori 100K jamoasiga raxmat.'
            }
            </p>
            <div className='icons'>
            <Icon.Star/>
            <Icon.Star/>
            <Icon.Star/>
            <Icon.Star/>
            <Icon.Star/>
            </div>
        </Wrapper>
    </Container>
  )
}

export default Card