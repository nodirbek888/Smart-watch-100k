import styled from "styled-components";

const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    margin-top: 40px;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    select{
        margin-top: 40px;
        width: 400px;
        height: 40px;
        outline: none;
        border: 1px solid #808080;
        background-color:white; 
        border-radius: 5px;
        cursor: pointer;
        color: #808080;
    }
    .btn{
        margin-top: 40px;
    }
`

const Inputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
    input{
        width: 400px;
        height: 40px;
        padding-left: 10px;
        outline: none;
        border: none;
        border: 1px solid #808080;
        background-color:white; 
        border-radius: 5px;
    }
`

export {Container,Wrapper,Inputs}