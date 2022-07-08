import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

const Container = styled.div`
    width:600px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    transition-duration: 0.5s;
    padding: 20px;
    background-color: white;
    &:hover{
        box-shadow: 1px 15px 50px rgba(219, 219, 219, 0.2);
    }
`

const Date = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    gap: 20px;
    .icons{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`

const Icon = styled.img``

Icon.Star = styled(Star)`
    width: 20px;
    height: 20px;
`


export {Container,Date,Wrapper,Icon}