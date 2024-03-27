import React from "react";
import styled,{keyframes} from "styled-components";

import Menu from "./menu/Menu";
import PlayListMenu from "./playlist/PlayListMenu";
import { IsWebSidebarOpen } from "../../context/SidebarContext";

const hideSidebar = keyframes`
    from {
        transform:translate3d(0,0,0);
    }
    to{
        transform:translate3d(-100%,0,0);
    }
`

const Wrapper = styled.div<{isOpen:boolean}>`
    margin-top:64px;
    width:240px;
    position:fixed;
    top:0;
    border-right:1px solid rgba(255,255,255,.15);
    height:100%;
    @media (max-width:936px){
        visibility:hidden;
        animation: ${hideSidebar} 0.2s linear forwards;
    }
    visibility: ${(props) => (props.isOpen ? 'visible':'hidden')} 
`

function WebSidebar() {
    const isOpen = IsWebSidebarOpen();

    return(
        <> 
            <Wrapper isOpen={isOpen}>
                <Menu></Menu>
                <PlayListMenu></PlayListMenu>
            </Wrapper>
        </>
    )
}
export default WebSidebar;