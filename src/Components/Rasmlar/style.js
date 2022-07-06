import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 100px;
    margin-top: 60px;
    margin-bottom: 50px;
    width: 100%;

    .rec{
        margin-top: 10px;
        /* border: 2px solid red; */
    }
    .rec-carousel-item-visible{
        height: 380px;
    }
    .rec-arrow-right{
        background: #000;
        color: white;
    }
    .rec-arrow-left{
        background: #000;
        color: white;
    }
    .rec-dot{
        background-color: #F4F4F4;
        border-radius: 0%;
        box-shadow: none;
        height: 5px;
        width: 40px;
        border-radius: 3px;
    }
    .rec-dot_active{
        width: 40px;
        height: 5px;
        background-color: #000000;
        border-radius: 3px;
    }
`
const Img = styled.img`
    width: 300px;
`

export {Container,Img}