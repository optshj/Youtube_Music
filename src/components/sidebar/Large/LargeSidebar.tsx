import styled, { keyframes } from "styled-components";

import { IsLargeSidebarOpen } from "../../../context/SidebarContext";

import Menu from "./Menu/Menu";
import PlayListMenu from "./Playlist/PlayListMenu";

interface WrapperProps {
    isOpen:boolean;
}
const onHide = keyframes`
    from{
        transform:translate3d(0,0,0);
    }
    to {
        transform:translate3d(-100%,0,0);
    }
`
const onShow = keyframes`
    from {
        transform:translate3d(-100%,0,0);
    to{
        transform:translate3d(0,0,0);
    }
}
`
const Wrapper = styled.div<WrapperProps>`
    position:absolute;
    z-index:2;
    background-color:${({theme}) => theme.colors.backgroundColor};
    width:240px;
    border-right:1px solid rgba(255,255,255,.15);
    height:100%;
    ${({theme}) => theme.medium`
        animation:${(props:WrapperProps) => (props.isOpen? onShow : onHide)} 0.2s linear forwards;
    `}
    ${({theme}) => theme.small`
        display:none;
    `}
`

function LargeSidebar() {
    const isOpen = IsLargeSidebarOpen();

    return(
        <Wrapper isOpen={isOpen}>
            <Menu></Menu>
            <PlayListMenu></PlayListMenu>
        </Wrapper>
    )
}
export default LargeSidebar;