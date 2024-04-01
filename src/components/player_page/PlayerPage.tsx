import React from "react";
import styled from "styled-components";
import { IsPlayerPageOpen } from "../context/PlayerPageContext";

const Wrapper = styled.div<{isOpen:boolean}>`
    visibility:${(props) => (props.isOpen?'visible':'hidden')}
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