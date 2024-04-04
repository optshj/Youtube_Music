import styled from "styled-components";

import { IsWebSidebarOpen } from "../../context/SidebarContext";
import { IsPlayerPageOpen } from "../../context/PlayerPageContext";

import Menu from "./Menu/Menu";

interface MobileSidebarProps {
    isScrollTop:boolean;
}

const Wrapper = styled.div<{isOpen:boolean,isScrollTop:boolean,isPlayerPageOpen:boolean}>`
    position:absolute;
    height:100%;
    width:72px;
    border-right:${(props)=> (!props.isScrollTop||props.isPlayerPageOpen?'1px solid rgba(255,255,255,.15)':'0px solid transparent')};
    transition:border-right 0.2s linear;
    @media (min-width:936px){
        display:none;   
    }
    @media (max-width:616px){
        display:none;
    }
`

function MobileSidebar({isScrollTop}:MobileSidebarProps){
    const isOpen = IsWebSidebarOpen();
    const isPlayerPageOpen = IsPlayerPageOpen();

    return(
        <Wrapper isOpen={isOpen} isScrollTop={isScrollTop} isPlayerPageOpen={isPlayerPageOpen}>
            <Menu></Menu>
        </Wrapper>
    )
}
export default MobileSidebar;