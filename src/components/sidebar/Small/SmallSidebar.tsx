import styled from "styled-components";

import { IsLargeSidebarOpen } from "../../../context/SidebarContext";
import { IsPlayerPageOpen } from "../../../context/PlayerPageContext";

import Menu from "./Menu/Menu";

interface WrapperProps {
    isOpen:boolean;
    isScrollTop:boolean;
    isPlayerPageOpen:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    position:absolute;
    height:100%;
    width:72px;
    border-right:${(props)=> (!props.isScrollTop||props.isPlayerPageOpen?'1px solid rgba(255,255,255,.15)':'0px solid transparent')};
    transition:border-right 0.2s linear;
    display:${(props) => (props.isOpen?'none':'inline-block')};
    ${({theme}) => theme.medium`
        display:${(props:WrapperProps) => (props.isOpen?'':'inline-block')};
    `}
    ${({theme}) => theme.small`
        display:none;
    `}
`

interface MobileSidebarProps {
    isScrollTop:boolean;
}
function SmallSidebar({isScrollTop}:MobileSidebarProps){
    const isOpen = IsLargeSidebarOpen();
    const isPlayerPageOpen = IsPlayerPageOpen();

    return(
        <Wrapper isOpen={isOpen} isScrollTop={isScrollTop} isPlayerPageOpen={isPlayerPageOpen}>
            <Menu></Menu>
        </Wrapper>
    )
}
export default SmallSidebar;