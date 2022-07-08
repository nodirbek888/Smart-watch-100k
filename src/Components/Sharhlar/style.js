import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 100px;
    .title{
        margin-bottom: 30px;
    }

    .rec{
        margin-top: 10px;
    }
    .rec-carousel-item-visible{
        height: 340px;
    }
    .rec-arrow-right{
        background: #000;
        color: white;
        &:focus{
            display: none;
        }
        &:hover{
            background-color: rgba(141, 121, 121, 0.696);
        }
    }
    .rec-arrow-left{
        background: #000;
        color: white;
        &:focus{
            display: none;
        }
        &:hover{
            background-color: rgba(141, 121, 121, 0.696);
        }
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

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
    border-radius: 50px;
    width: 100%;
    padding: 20px 30px;
    background: #FBFBFB;
`

export {Container,Wrapper}