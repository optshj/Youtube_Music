import React from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader";

const Wrapper = styled.div`
    box-sizing:border-box;
    @media (min-width:936px){
        margin-left:240px;
    }
    @media (min-width:616px) and (max-width:936px){
        margin-left:72px;
    }
`

function Header() {
    return(
        <>
            <Wrapper>
                <MainHeader></MainHeader>
            </Wrapper>
        </>
    )
}
export default Header;