import React from 'react'
import { Container, Wrapper } from './style';
import Carousel from "react-elastic-carousel";
import Card from '../Card/index'

const Sharhlar = () => {
  const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 3 },
		{ width: 1180, itemsToShow: 3 },
	  ];
  return (
    <Container>
        <h1 className='title'>Sharhlar</h1>
        <Wrapper>
      <Carousel 
			itemsToShow={1}
			itemsToScroll={1}
			breakPoints ={breakPoints}
			itemPadding={[0, 20]}
			enableMouseSwipe={true}   
			// showArrows={false} 
			>
			 <Card/>
			 <Card/>
			 <Card/>
			 <Card/>
			 <Card/>
			 <Card/>
			 <Card/>
			 <Card/>
          </Carousel>
        </Wrapper>
    </Container>
  )
}

export default Sharhlar