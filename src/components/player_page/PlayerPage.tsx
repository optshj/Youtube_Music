import React from "react";
import styled from "styled-components";
import { IsPlayerPageOpen } from "../context/PlayerPageContext";

const Wrapper = styled.div<{isOpen:boolean}>`
    background-color:#030303;
    visibility:${(props) => (props.isOpen?'visible':'hidden')};
    position:fixed;
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
const ContentWrapper = styled.div`
    padding:24px 48px 0;
    box-sizing:border-box;
    height:100%;
    display:flex;
`
const MainPanel = styled.div`
`
const SidePanel = styled.div`
`
function PlayerPage() {
    const isOpen = IsPlayerPageOpen();
    return(
        <>
            <Wrapper isOpen={isOpen}>
                <ContentWrapper>

                </ContentWrapper>
            </Wrapper>
        </>
    )
}
export default PlayerPage;