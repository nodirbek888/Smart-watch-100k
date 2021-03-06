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
        font-family: 'Inter', sans-serif;
        padding: 0px 15px;
    }
    .btn{
        margin-top: 40px;
    }
    .SelecrtWrapper{
        margin-top: 20px;

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
        height: 35px;
        padding-left: 15px;
        outline: none;
        border: none;
        border: 1px solid #d9d9d9;
        background-color:white; 
        border-radius: 5px;
        &:placeholder-shown{
            color: #7a767662;
            font-size: 12px;
             font-family: 'Inter', sans-serif;
        }
        &:focus{
            border:1px solid #1890ff;
            box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
        }
    }
`

export {Container,Wrapper,Inputs}