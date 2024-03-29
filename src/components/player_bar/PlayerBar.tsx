import React from "react";
import styled from "styled-components";
import LeftControl from "./LeftControl";
import TimeInfo from "./TimeInfo";
import CenterControl from "./CenterControl";

const Wrapper = styled.div`
    visibility:visible;
    position:fixed;
    bottom:0;
    left:0;
    z-index:2;
    width:100%;
    height:72px;
    display:grid;
    grid-template-areas:"start middle end";
    background-color:#212121;
`
const LeftContent = styled.div`
    display:flex;
    align-items:center;
    width:292px;
    height:72px;
    @media (max-width:1150px){
        width:241px;
    }
    @media (max-width:936px){
        width:144px;
    }
`
const CenterContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const RightContent = styled.div`
`
function PlayerBar(){

    return(
        <>
            <Wrapper>
                <LeftContent>
                    <LeftControl></LeftControl>
                    <TimeInfo></TimeInfo>
                </LeftContent>

                <CenterContent>
                    <CenterControl></CenterControl>
                </CenterContent>
                <RightContent></RightContent>
            </Wrapper>
        </>
    )
}
export default PlayerBar;