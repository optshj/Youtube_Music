import styled from "styled-components";

import Header from "./Header/Header";
import Content from "./Content/Content";

const Wrapper = styled.div`
    box-sizing:border-box;
    padding-top:64px;
    @media (min-width:936px){
        margin-left:240px;
    }
    @media (min-width:616px) and (max-width:936px){
        margin-left:72px;
    }
`

function Main(){
    return(
        <Wrapper>
            <Header></Header>
            <Content></Content>
            <Content></Content>
            <Content></Content>
        </Wrapper>
    )
}
export default Main;