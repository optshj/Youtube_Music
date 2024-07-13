import styled from "styled-components";

import { useSongData } from "../../../context/PlayerbarContext";
import { useToggle } from "../../../context/ToggleContext";

import LeftControl from "./components/LeftControl";
import TimeInfo from "./components/TimeInfo";
import SongInfo from "./components/SongInfo";
import RightControl from "./components/RightControl";
import PlayerPage from "../PlayerPage/PlayerPage";

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
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
    const { toggleComponent } = useToggle();
    const { songData } = useSongData();

    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            toggleComponent(PlayerPage);
        }
    }

    return(
        <>
        {songData &&
            <Wrapper onClick={handleClick}>
                <LeftContent>
                    <LeftControl/>
                    <TimeInfo playTime={songData.playTime}/>
                </LeftContent>

                <CenterContent onClick={handleClick}>
                    <SongInfo songData={songData}/>
                </CenterContent>

                <RightContent>
                    <RightControl/>
                </RightContent>
            </Wrapper>
        }
        </>
    )
}