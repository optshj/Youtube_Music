import styled, { keyframes } from "styled-components";

import { IsLargeSidebarOpen } from "../../../context/SidebarContext";

import Menu from "./Menu/Menu";
import PlayListMenu from "./Playlist/PlayListMenu";

const onShow = keyframes`
    from {
        transform:translate3d(-100%,0,0);
    }
    to{
        transform:translate3d(0,0,0);
    }
`
interface WrapperProps {
    $isOpen:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    position:absolute;
    padding-top:66px;
    width:240px;
    height:100%;
    z-index:1;
    background-color:${({theme}) => theme.colors.backgroundColor};
    border-right:1px solid rgba(255,255,255,.15);
    display:${(props:WrapperProps)=>props.$isOpen?'inline-block':'none'};
    animation:${(props:WrapperProps)=>props.$isOpen?onShow:''} 0.2s linear;
    ${({theme}) => theme.medium`
        display:${(props:WrapperProps)=>props.$isOpen?'inline-block':'none'};
        animation:${(props:WrapperProps)=>props.$isOpen?onShow:''} 0.2s linear;
    `}
    ${({theme}) => theme.small`
        display:${(props:WrapperProps)=>props.$isOpen?'block':'none'};   
    `}
`
interface LargeSidebarProps {
    selectState:number;
    setSelectState:React.Dispatch<React.SetStateAction<number>>
}
function LargeSidebar({selectState,setSelectState}:LargeSidebarProps) {
    const isOpen = IsLargeSidebarOpen();

    return(
        <Wrapper $isOpen={isOpen}>
            <Menu selectState={selectState} setSelectState={setSelectState}/>
            <PlayListMenu/>
        </Wrapper>
    )
}
export default LargeSidebar;