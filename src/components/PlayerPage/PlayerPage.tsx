import { useState } from "react";
import styled, { css,keyframes } from "styled-components";

import { SlArrowDown } from "react-icons/sl";

import { IsPlayerPageOpen, usePlayerPage } from "../../context/PlayerPageContext";

import SelectButton from "./AlbumImage/SelectButton";
import AlbumImage from "./AlbumImage/AlbumImage";
import SidePanelHeader from "./MusicList/SidePanelHeader";
import MusicList from "./MusicList/MusicList";
import PlayerControl from "./PlayerControl/PlayerControl";
import PlayerBar from "./PlayerBar/PlayerBar";

const openPlayerPage = keyframes`
    0%{
        transform:translateY(100%);
    }
    100%{
        transform:translateY(0%);
    }
`
interface WrapperProps {
    $isOpen:boolean
}
const Wrapper = styled.div<WrapperProps>`
    background-color:${({theme}) => theme.colors.backgroundColor};
    position:fixed;
    top:64px;
    left:240px;
    width:calc(100vw - 240px);
    height:calc(100vh - 136px);
    ${({theme}) => theme.medium`
        width:calc(100vw - 72px);
        left:72px;
    `}
    ${({theme}) => theme.small`
        z-index:6;
        height:100%;
        width:100%;
        top:0;
        left:0;
        ${({ $isOpen }:WrapperProps) => $isOpen && css`
            animation: ${openPlayerPage} 0.3s cubic-bezier(.2,0,.6,1);
        `}
    `}
    transform:${(props) => (props.$isOpen ?'translate3d(0,0,0)':'translate3d(0,100vh,0)')};
    transition:transform .3s cubic-bezier(.2,0,.6,1);
`
const ContentWrapper = styled.div`
    display:flex;
    padding:24px 48px 0;
    box-sizing:border-box;
    height:100%;
    ${({theme}) => theme.medium`
        flex-direction:column;
    `}
    ${({theme}) => theme.small`
        padding:0;
    `}
`
const MainPanel = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    ${({theme}) => theme.medium`
        height:35vw;
        padding:0 30vw;
    `}
    ${({theme}) => theme.small`
        height:0;
        padding:0;
    `}
`
interface ButtonWrapperProps {
    $isUp:boolean
}
const ButtonWrapper = styled.div<ButtonWrapperProps>`
    ${({theme}) => theme.small`
        visibility: ${({$isUp}:ButtonWrapperProps) => $isUp ? 'hidden' : 'visible'};
    `}
`
const SidePanelWrapper = styled.div`
    margin-top: 20px;
`
interface SidePanelProps {
    $isUp:boolean
}
const SidePanel = styled.div<SidePanelProps>`
    display:flex;
    flex-direction:column;
    width:40%;
    margin:0 0 0 48px;
    min-height:0;
    height:100%;
    ${({theme}) => theme.medium`
        width:100%;
        margin:0;
    `}
    ${({theme}) => theme.small`
        transform:${(props:SidePanelProps) => (props.$isUp?'translate(0,64px)':'translate(0,calc(100% - 80px))')};
        border-radius:10px 10px 0 0;
        z-index:10;
        background-color:${theme.colors.backgroundColor};
        transition:transform 0.2s cubic-bezier(.2,0,.6,1);
        background-color:${(props:SidePanelProps) => (props.$isUp ? '#212121': theme.colors.backgroundColor)};
    `}
`
const DownArrow = styled(SlArrowDown)`
    color:#fff;
    position: absolute;
    padding: 24px;
    font-size: 16px;
    display: none;
    cursor: pointer;
    ${({theme}) => theme.small`
        display:inline-block;
    `}
`
function PlayerPage() {
    const isOpen = IsPlayerPageOpen();
    const {click} = usePlayerPage();
    const [isUp,setIsUP] = useState(false);
    const onUp = () => {
        setIsUP(true);
    }
    const onDown = () => {
        setIsUP(false);
    }
    return(
        <Wrapper $isOpen={isOpen}>
            <ContentWrapper>
                <MainPanel onClick={onDown}>
                    <ButtonWrapper $isUp={isUp}>
                        <DownArrow onClick={click}/>
                        <SelectButton/>
                        <AlbumImage/>
                    </ButtonWrapper>
                </MainPanel>

                <PlayerBar isUp={isUp} onClick={onDown}/>
                
                <PlayerControl></PlayerControl>

                <SidePanel $isUp={isUp}>
                    <SidePanelWrapper onClick={onUp}>
                        <SidePanelHeader isUp={isUp}/>
                    </SidePanelWrapper>
                    <MusicList/>
                </SidePanel>
            </ContentWrapper>
        </Wrapper>
    )
}
export default PlayerPage;