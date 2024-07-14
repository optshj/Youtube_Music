import styled, { keyframes } from "styled-components";

import { useToggle } from "../../../../context/ToggleContext";

import LargeMenu from "./LargeMenu";
import PlayListMenu from "./LargePlayListMenu";
import SideBar from "../SideBar";

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
    z-index:2;
    background-color:${({theme}) => theme.colors.backgroundColor};
    border-right:1px solid rgba(255,255,255,.15);
    display:${(props:WrapperProps)=>props.$isOpen?'inline-block':'none'};
    ${({theme}) => theme.medium`
        animation:${(props:WrapperProps)=>props.$isOpen ? onShow:''} 0.2s linear;
    `}
`

export default function LargeSideBar() {
    const { isComponentsOpen } = useToggle();
    const isOpen = isComponentsOpen(SideBar);

    return(
        <Wrapper $isOpen={isOpen}>
            <LargeMenu/>
            <PlayListMenu/>
        </Wrapper>
    )
}