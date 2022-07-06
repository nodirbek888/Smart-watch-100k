import React from 'react'
import { Container, Wrapper } from './style'

const Video = () => {
  return (
    <Container>
        <h1 className='title'>Batafsil videoda</h1>
        <Wrapper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Quq8FEJvTi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </Wrapper>
    </Container>
  )
}

export default Video
