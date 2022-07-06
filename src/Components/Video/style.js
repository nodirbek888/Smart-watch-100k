import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
    padding: 0px 100px;
    margin-bottom: 200px;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    iframe{
        width: 100%;
        height: 500px;
        border-radius: 10px;
    }
`

export {Container,Wrapper}