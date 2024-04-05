import styled from "styled-components";

import { IsPlayerPageOpen } from "../context/PlayerPageContext";

import SelectButton from "./AlbumImage/SelectButton";
import AlbumImage from "./AlbumImage/AlbumImage";
import SidePanelHeader from "./MusicList/SidePanelHeader";
import MusicList from "./MusicList/MusicList";

const Wrapper = styled.div<{isOpen:boolean}>`
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
        width:100%;
        top:0;
        left:0;
    `}
    transform:${(props) => (props.isOpen ?'translate3d(0,0,0)':'translate3d(0,100vh,0)')};
    transition:transform .3s cubic-bezier(.2,0,.6,1);
`
const ContentWrapper = styled.div`
    padding:24px 48px 0;
    box-sizing:border-box;
    height:100%;
    display:flex;
    ${({theme}) => theme.medium`
        flex-direction:column;
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
`
const SidePanel = styled.div`
    display:flex;
    flex-direction:column;
    width:40%;
    margin:0 0 0 48px;
    min-height:0;
    height:100%;
    ${({theme}) => theme.medium`
        width:100%;
        margin:64px 0 0 0;
    `}
`
function PlayerPage() {
    const isOpen = IsPlayerPageOpen();

    return(
        <Wrapper isOpen={isOpen}>
            <ContentWrapper>
                <MainPanel>
                    <SelectButton></SelectButton>
                    <AlbumImage></AlbumImage>
                </MainPanel>
                <SidePanel>
                    <SidePanelHeader></SidePanelHeader>
                    <MusicList></MusicList>
                </SidePanel>
            </ContentWrapper>
        </Wrapper>
    )
}
export default PlayerPage;