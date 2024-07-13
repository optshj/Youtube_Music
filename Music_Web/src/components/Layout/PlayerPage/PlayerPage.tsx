import { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { useToggle } from "../../../context/ToggleContext";

import { SlArrowDown } from "react-icons/sl";

import SelectButton from "./components/MainSelectButton";
import AlbumImage from "./components/MainAlbumImage";
import SidePanelHeader from "./components/SideHeader";
import NextTrack from "./components/MusicListNextTrack";
import PlayerControl from "./components/PlayerControl";
import PlayerBar from "./components/PlayerBar";
import Lyrics from "./components/Lyrics";

const Wrapper = styled.div`
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
    `}
    &.playerpage-enter {
        transform: translateY(100%);
    }
    &.playerpage-enter-active {
        transform: translateY(0%);
        transition: transform 300ms cubic-bezier(.2,0,.6,1);
    }
    &.playerpage-exit {
        transform: translateY(0%);
        transition: transform 300ms cubic-bezier(.2,0,.6,1);
    }
    &.playerpage-exit-active {
        transform: translateY(100%);
    }
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

export default function PlayerPage() {
    const [isUp,setIsUP] = useState(false);
    const [selectType,setSelectType] = useState<String>('NextTrack');
    const { toggleComponent,isComponentsOpen } = useToggle();
    const onUp = () => {
        setIsUP(true);
    }
    const onDown = () => {
        setIsUP(false);
    }

    return( 
        <CSSTransition in={isComponentsOpen(PlayerPage)} timeout={500} classNames="playerpage" unmountOnExit>
            <Wrapper>
                <ContentWrapper>
                    <MainPanel onClick={onDown}>
                        <ButtonWrapper $isUp={isUp}>
                            <DownArrow onClick={()=> toggleComponent(PlayerPage)}/>
                            <SelectButton/>
                            <AlbumImage/>
                        </ButtonWrapper>
                    </MainPanel>

                    <PlayerBar isUp={isUp} onClick={onDown}/>
                    
                    <PlayerControl/>

                    <SidePanel $isUp={isUp}>
                        <SidePanelWrapper onClick={onUp}>
                            <SidePanelHeader isUp={isUp} selectType={selectType} setSelectType={setSelectType}/>
                        </SidePanelWrapper>
                        {selectType === 'NextTrack' && <NextTrack/> }
                        {selectType === 'Lyrics' && <Lyrics/>}
                    </SidePanel>
                </ContentWrapper>
            </Wrapper>
        </CSSTransition>
    )
}