import styled,{keyframes} from "styled-components";

import { IsLargeSidebarOpen } from "../../context/SidebarContext";

import Menu from "./Menu/Menu";
import PlayListMenu from "./Playlist/PlayListMenu";

interface WrapperProps {
    isOpen:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    background-color:${({theme}) => theme.colors.backgroundColor};
    width:240px;
    border-right:1px solid rgba(255,255,255,.15);
    height:100%;
    display:${(props) => props.isOpen? 'inline-block':'none'};

    ${({theme}) => theme.medium`
        display:${(props:WrapperProps) => props.isOpen? 'none':'inline-block'};
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