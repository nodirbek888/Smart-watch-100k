import React from 'react'
import Carousel from "react-elastic-carousel";
import {Container,Img} from './style'
import smar1 from '../../assets/imgs/smart-watch1.png'
// import smar2 from '../../assets/imgs/smart-watch2.png'
import smar3 from '../../assets/imgs/smart-watch3.png'

const Rasmlar = () => {
  const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 3 },
		{ width: 1180, itemsToShow: 3 },
	  ];
  return (
    <Container>
      <h1 className='title'>Mahsulot rasmlari</h1>
      <Carousel 
					itemsToShow={1}
					itemsToScroll={1}
					breakPoints ={breakPoints}
					itemPadding={[0, 20]}
					enableMouseSwipe={true}   
					// showArrows={false} 
					>
            <Img src={smar1}/>
            <Img src={smar3}/>
            <Img src={smar1}/>
            <Img src={smar3}/>
            <Img src={smar1}/>
            <Img src={smar3}/>
            <Img src={smar1}/>
            <Img src={smar3}/>
            <Img src={smar1}/>
            <Img src={smar3}/>
            <Img src={smar1}/>
            <Img src={smar3}/>
          </Carousel>
    </Container>
  )
}

export default Rasmlar