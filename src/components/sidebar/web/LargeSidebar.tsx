import styled,{keyframes} from "styled-components";

import { IsLargeSidebarOpen } from "../../context/SidebarContext";

import Menu from "./Menu/Menu";
import PlayListMenu from "./Playlist/PlayListMenu";


const hideSidebar = keyframes`
    0% {
        transform:translate3d(0,0,0);
    }
    50% {
        transform:translate3d(-100%,0,0);
        display:none;
    }
    100% {
        transform:translate3d(0,0,0);
    }
`

interface WrapperProps {
    isOpen:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    width:240px;
    position:absolute;
    border-right:1px solid rgba(255,255,255,.15);
    height:100%;
    display:${(props) => props.isOpen? 'inline-block':'none'};

    ${({theme}) => theme.medium`
        display:${(props:WrapperProps) => props.isOpen? 'none':'inline-block'};
        animation:${hideSidebar} 1s linear forward;
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