import React from "react";
import styled from "styled-components";
import { IsPlayerPageOpen } from "../context/PlayerPageContext";

const Wrapper = styled.div<{isOpen:boolean}>`
    color:white;
    visibility:${(props) => (props.isOpen?'visible':'hidden')};
    position:fixed;
    z-index:2;
    top:64px;
    left:240px;
    width:calc(100vw - 240px);
    height:calc(100vh - 136px);

    @media (max-width:936px){
        width:calc(100vw - 72px);
        left:72px;
    }
    @media (max-width:616px){
        width:100%;
        top:0;
        left:0;
    }
`

function PlayerPage() {
    const isOpen = IsPlayerPageOpen();
    return(
        <>
            <Wrapper isOpen={isOpen}>
                
            </Wrapper>
        </>
    )
}
export default PlayerPage;