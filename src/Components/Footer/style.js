import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
    padding: 40px 100px 0px 100px;
    background-color: #000000;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: auto;
    .small-description{
        color: white;
    }
`

export {Container,Wrapper}