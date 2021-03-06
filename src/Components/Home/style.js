import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding: 0px 100px;
    gap: 30px;
    .home-title{
        font-size: 50px;
    }
`
const Wrapper = styled.div`
    display: flex;
    text-align: center;
    height: 70px;
    width: 250px;
    margin-top: 20px;
    background-color: var(--primaryColor);
    padding:  10px 20px;
    .sub-title{
        margin-top: 10px;
        margin-left: 10px;
    }
`
const Img = styled.img`
    width: 550px;
`

export {Container,Wrapper,Img}