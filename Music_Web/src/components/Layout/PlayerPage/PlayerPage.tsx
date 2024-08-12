import { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { useToggle } from "../../../context/ToggleContext";

import { SlArrowDown } from "react-icons/sl";

import MainSelectButton from "./components/MainSelectButton";
import MainAlbumImage from "./components/MainAlbumImage";
import SideHeader from "./components/SideHeader";
import MusicListNextTrack from "./components/MusicListNextTrack";
import PlayerControl from "./components/PlayerControl";
import PlayerBar from "./components/PlayerBar";
import Lyrics from "./components/Lyrics";
import SideBar from "../SideBar/SideBar";

const Wrapper = styled.div<{$isSideBarOpen:boolean}>`
    background-color:${({theme}) => theme.colors.backgroundColor};
    position:fixed;
    top:64px;
    height:calc(100vh - 136px);
    ${props => props.$isSideBarOpen ? 
        'left:240px;width:calc(100vw - 240px);'
        :'left:72px;width:calc(100vw - 72px);'
    } 
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
    ${({theme}) => theme.medium` flex-direction:column`}
    ${({theme}) => theme.small` padding:0`}
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
const ButtonWrapper = styled.div<{$isBottomBarUp:boolean}>`
    ${({theme,$isBottomBarUp}) => theme.small`
        visibility: ${$isBottomBarUp ? 'hidden' : 'visible'};
    `}
`
const SidePanelWrapper = styled.div`
    margin-top: 20px;
`
const SidePanel = styled.div<{$isBottomBarUp:boolean}>`
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
    ${({theme,$isBottomBarUp}) => theme.small`
        transform: ${$isBottomBarUp ?'translate(0,64px)' : 'translate(0,calc(100% - 80px))'};
        background-color: ${$isBottomBarUp ? '#212121' : theme.colors.backgroundColor};
        transition:transform 0.2s cubic-bezier(.2,0,.6,1);
        border-radius:10px 10px 0 0;
        z-index:10;
    `}
`
const DownArrow = styled(SlArrowDown)`
    color:#fff;
    position: absolute;
    padding: 24px;
    font-size: 16px;
    display: none;
    cursor: pointer;
    ${({theme}) => theme.small` display:inline-block`}
`

export default function PlayerPage() {
    const [isBottomBarUp,setIsBottomBarUp] = useState(false);
    const [selectType,setSelectType] = useState<String>('NextTrack');
    const { toggleComponent,isComponentsOpen } = useToggle();
    const onUp = () => {
        setIsBottomBarUp(true);
    }
    const onDown = () => {
        setIsBottomBarUp(false);
    }
    return( 
        <CSSTransition in={isComponentsOpen(PlayerPage)} timeout={500} classNames="playerpage" unmountOnExit>
            <Wrapper $isSideBarOpen={isComponentsOpen(SideBar)}>
                <ContentWrapper>
                    <MainPanel onClick={onDown}>
                        <ButtonWrapper $isBottomBarUp={isBottomBarUp}>
                            <DownArrow onClick={()=> toggleComponent(PlayerPage)}/>
                            <MainSelectButton/>
                            <MainAlbumImage/>
                        </ButtonWrapper>
                    </MainPanel>

                    <PlayerBar $isBottomBarUp={isBottomBarUp} onClick={onDown}/>
                    
                    <PlayerControl/>

                    <SidePanel $isBottomBarUp={isBottomBarUp}>
                        <SidePanelWrapper onClick={onUp}>
                            <SideHeader $isBottomBarUp={isBottomBarUp} selectType={selectType} setSelectType={setSelectType}/>
                        </SidePanelWrapper>
                        {selectType === 'NextTrack' && <MusicListNextTrack/> }
                        {selectType === 'Lyrics' && <Lyrics/>}
                    </SidePanel>
                </ContentWrapper>
            </Wrapper>
        </CSSTransition>
    )
}