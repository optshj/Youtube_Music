import styled from "styled-components";

import { IsPlayerbarOpen } from "../../../context/PlayerbarContext";
import { usePlayerPage } from "../../../context/PlayerPageContext";

import LeftControl from "./components/LeftControl";
import TimeInfo from "./components/TimeInfo";
import SongInfo from "./components/SongInfo";
import RightControl from "./components/RightControl";

const Wrapper = styled.div<{$isOpen:boolean}>`
    display:flex;
    justify-content: space-between;
    visibility:${(props) => (props.$isOpen ? 'visible':'hidden')};
    position:fixed;
    z-index:4;
    bottom:0;
    left:0;
    width:100%;
    height:72px;
    background-color:#212121;
`
const LeftContent = styled.div`
    display:flex;
    align-items:center;
    ${({theme}) => theme.large`
        width:241px;
    `}
    ${({theme}) => theme.medium`
        width:144px;
    `}
    ${({theme}) => theme.small`
        display:none;
    `}
`
const CenterContent = styled.div`
    display:flex;
    align-items:center;
    margin-left:8px;
    overflow:hidden;
`
const RightContent = styled.div`
    display:flex;
    align-items:center;
    margin-right:4px;
`
export default function Playerbar(){
    const isOpen = IsPlayerbarOpen();
    const { click } = usePlayerPage();
    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            click();
        }
    }

    return(
        <Wrapper $isOpen={isOpen} onClick={handleClick}>
            <LeftContent>
                <LeftControl/>
                <TimeInfo/>
            </LeftContent>

            <CenterContent onClick={handleClick}>
                <SongInfo/>
            </CenterContent>

            <RightContent>
                <RightControl/>
            </RightContent>
        </Wrapper>
    )
}