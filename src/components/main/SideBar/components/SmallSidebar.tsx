import styled from "styled-components";

import { IsScrollTop } from "../../../../context/ScrollContext";
import { IsPlayerPageOpen } from "../../../../context/PlayerPageContext";

import SmallMenu from "./SmallMenu";

interface WrapperProps {
    $isScrollTop:boolean;
    $isPlayerPageOpen:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    position:absolute;
    padding-top:66px;
    height:100%;
    width:72px;
    border-right:${(props)=> (!props.$isScrollTop||props.$isPlayerPageOpen?'1px solid rgba(255,255,255,.15)':'0px solid transparent')};
    transition:border-right 0.2s linear;
    display:inline-block;
    ${({theme}) => theme.small`
        display:none;
    `}
`

interface SmallSideBarProps{
    selectState:number;
    setSelectState:React.Dispatch<React.SetStateAction<number>>
}
export default function SmallSideBar({selectState,setSelectState}:SmallSideBarProps){
    const isPlayerPageOpen = IsPlayerPageOpen();
    const isScrollTop = IsScrollTop();

    return(
        <Wrapper $isScrollTop={isScrollTop} $isPlayerPageOpen={isPlayerPageOpen}>
            <SmallMenu selectState={selectState} setSelectState={setSelectState}/>
        </Wrapper>
    )
}