import React from "react";
import styled from "styled-components";

import DropDownItem from "./DropDownItem";

const Wrapper = styled.div`
    display:flex;
    width:322px;
    flex-direction:column;
    padding:12px 0;
    background:#333;
    position:fixed;
    z-index:5;
    left:4%;
    top:63%;
`
function PublicDropDown(){
    return(
        <>
            <Wrapper>
                <DropDownItem></DropDownItem>
            </Wrapper>
        </>
    )
}
export default PublicDropDown;