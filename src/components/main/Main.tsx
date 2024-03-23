import React from "react";
import styled from "styled-components";

import Header from "./header/Header";
import Content from "./content/Content";

const Wrapper = styled.div`
    box-sizing:border-box;
    @media (min-width:936px){
        margin-left:240px;
    }
    @media (min-width:616px) and (max-width:936px){
        margin-left:72px;
    }
`

function Main(){
    return(
        <>
            <Wrapper>
                <Header></Header>
                <Content></Content>
                <Content></Content>
                <Content></Content>
            </Wrapper>
        </>
    )
}
export default Main;