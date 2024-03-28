import React from "react";
import styled from "styled-components";

import Menu from "./menu/Menu";
import { IsWebSidebarOpen } from "../../context/SidebarContext";

const Wrapper = styled.div`
    margin-top:64px;
    width:72px;
    position:fixed;
    height:100%;
    @media (min-width:936px){
        display:none;
    }
    @media (max-width:616px){
        display:none;
    }
`
function MobileSidebar(){
    const isOpen = IsWebSidebarOpen();
    
    return(
        <>
            <Wrapper>
                <Menu></Menu>
            </Wrapper>
        </>
    )
}
export default MobileSidebar;