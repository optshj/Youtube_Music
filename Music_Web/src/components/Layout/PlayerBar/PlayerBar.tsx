import styled from "styled-components"

import { useToggle } from "../../../context/ToggleContext"
import { useSongData } from "../../../context/SongDataConetext"

import LeftContent from "./components/LeftContent"
import RightContent from "./components/RightContent"
import CenterContent from "./components/CenterContent"
import PlayerPage from "../PlayerPage/PlayerPage"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 4;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 72px;
    background-color: #212121;
`

export default function Playerbar() {
    const { toggleComponent } = useToggle()
    const { songData } = useSongData()

    const handleClick = () => {
        toggleComponent(PlayerPage)
    }
    const handleBlockClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }

    return (
        songData && (
            <Wrapper onClick={handleClick}>
                <LeftContent onClick={handleBlockClick} playTime={songData.playTime} />
                <CenterContent onClick={handleClick} songData={songData} />
                <RightContent onClick={handleBlockClick} />
            </Wrapper>
        )
    )
}
