import styled from "styled-components";

import { IsPlayerPageOpen } from "../context/PlayerPageContext";

import SelectButton from "./SelectButton";
import AlbumImage from "./AlbumImage";
import SidePanelHeader from "./SidePanelHeader";
import MusicList from "./MusicList";

const Wrapper = styled.div<{isOpen:boolean}>`
    background-color:#030303;
    position:fixed;
    top:64px;
    left:240px;
    width:calc(100vw - 240px);
    height:calc(100vh - 136px);
    @media (max-width:936px){
        width:calc(100vw - 72px);
        left:72px;
    }
    @media (max-width:616px){
        width:100%;
        top:0;
        left:0;
    }
    transform:${(props) => (props.isOpen ?'translate3d(0,0,0)':'translate3d(0,100vh,0)')};
    transition:transform .3s cubic-bezier(.2,0,.6,1);
`
const ContentWrapper = styled.div`
    padding:24px 48px 0;
    box-sizing:border-box;
    height:100%;
    display:flex;
`
const MainPanel = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`
const SidePanel = styled.div`
    display:flex;
    flex-direction:column;
    width:40%;
    margin:0 0 0 48px;
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