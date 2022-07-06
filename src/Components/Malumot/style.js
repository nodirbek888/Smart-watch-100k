import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    padding: 0px 100px;
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center; 
    margin-top: 50px;
    justify-content: space-between;
`

const Description = styled.div`
    width: 500px;
    .description{
        margin-top: 20px;
    }
    .sub-title{
    }
`

const Img = styled.img`
    width: 400px;
`

export {Container,Wrapper,Description,Img}