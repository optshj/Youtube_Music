import styled from "styled-components"

import { IoPlaySharp, IoPlaySkipForwardSharp, IoPauseSharp } from "react-icons/io5"

import { IsPlayState, usePlayState } from "../../../../context/PlayStateContext"
import { useSongData } from "../../../../context/SongDataConetext"

const Wrapper = styled.div<{ $isBottomBarUp: boolean }>`
    display: none;
    ${({ theme, $isBottomBarUp }) => theme.small`
        display: ${$isBottomBarUp ? "flex" : "none"};
        flex-direction: row;
        position:absolute;
        width:100%;
        padding-top:8px;
    `}
`
const LeftContent = styled.div`
    margin-left: 16px;
`
const CenterContent = styled.div`
    margin-left: 16px;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin: 0 0 4px;
`
const Artist = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
`
const RightContent = styled.div`
    display: flex;
    margin: 0 16px;
    align-items: center;
    flex-direction: row;
    font-size: 24px;
    margin-left: auto;
`
const PlayPauseWrapper = styled.div`
    display: flex;
    color: #fff;
    align-items: center;
    margin: 0 16px;
    cursor: pointer;
`
const NextIcon = styled(IoPlaySkipForwardSharp)`
    color: #fff;
    margin: 0 16px;
    cursor: pointer;
`

interface PlayerBarProps {
    $isBottomBarUp: boolean
    onClick: () => void
}
export default function PlayerBar({ $isBottomBarUp, onClick }: PlayerBarProps) {
    const isPlay = IsPlayState()
    const { togglePlayState } = usePlayState()
    const { songData } = useSongData()
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClick()
        }
    }

    return (
        <Wrapper $isBottomBarUp={$isBottomBarUp} onClick={handleClick}>
            <LeftContent>
                <img src={"https://via.placeholder.com/40x40/666.png"} alt={"Placeholder"} onClick={handleClick} />
            </LeftContent>

            <CenterContent>
                <Title onClick={handleClick}>{songData.title}</Title>
                <Artist onClick={handleClick}>{songData.artist}</Artist>
            </CenterContent>

            <RightContent>
                <PlayPauseWrapper onClick={togglePlayState}>
                    {isPlay ? <IoPlaySharp /> : <IoPauseSharp />}
                </PlayPauseWrapper>
                <NextIcon />
            </RightContent>
        </Wrapper>
    )
}
