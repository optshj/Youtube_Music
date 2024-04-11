import styled, { keyframes } from "styled-components";

import { IsLargeSidebarOpen } from "../../../context/SidebarContext";

import Menu from "./Menu/Menu";
import PlayListMenu from "./Playlist/PlayListMenu";

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
interface WrapperProps {
    $isOpen:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    position:absolute;
    width:240px;
    height:100%;
    z-index:2;
    background-color:${({theme}) => theme.colors.backgroundColor};
    border-right:1px solid rgba(255,255,255,.15);
    ${({theme}) => theme.medium`
        animation:${(props:WrapperProps) => (props.$isOpen? onShow : onHide)} 0.2s linear forwards;
    `}
    ${({theme}) => theme.small`
        display:none;
    `}
`

function LargeSidebar() {
    const isOpen = IsLargeSidebarOpen();

    return(
        <Wrapper $isOpen={isOpen}>
            <Menu></Menu>
            <PlayListMenu></PlayListMenu>
        </Wrapper>
    )
}
export default LargeSidebar;