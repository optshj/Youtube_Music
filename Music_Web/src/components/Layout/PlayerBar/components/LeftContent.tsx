import styled from "styled-components"

import { IoMdPlay, IoMdPause, IoMdSkipForward, IoMdSkipBackward } from "react-icons/io"

import { useSongData } from "../../../../context/SongDataConetext"
import { IsPlayState, usePlayState } from "../../../../context/PlayStateContext"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    ${({ theme }) => theme.large` width:241px`}
    ${({ theme }) => theme.medium` width:144px`}
    ${({ theme }) => theme.small` display:none`}
`
const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`
const IconButton = styled.div<{ $isBig?: boolean }>`
    color: #fff;
    padding: 8px;
    cursor: pointer;
    margin: 0 0 0 12px;
    ${props => (props.$isBig ? "width: 36px; height: 36px;" : "")}
`
const TimeInfo = styled.div`
    font-size: 12px;
    color: #aaa;
    margin: 0 16px 0 8px;
    white-space: nowrap;
    ${({ theme }) => theme.medium` visibility:hidden`}
`

interface LeftContentProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
    playTime: number
}
export default function LeftContent({ onClick, playTime }: LeftContentProps) {
    const isPlay = IsPlayState()
    const { togglePlayState } = usePlayState()
    const { currentMinute, currentSecond } = useSongData()

    const totalMinute = Math.floor(playTime / 60)
        .toString()
        .padStart(2, "0")
    const totalSecond = (playTime % 60).toString().padStart(2, "0")

    return (
        <Wrapper onClick={onClick}>
            <IconWrapper>
                <IconButton as={IoMdSkipBackward} />
                <div onClick={togglePlayState}>
                    {isPlay ? <IconButton as={IoMdPause} $isBig /> : <IconButton as={IoMdPlay} $isBig />}
                </div>
                <IconButton as={IoMdSkipForward} />
            </IconWrapper>
            <TimeInfo>{`${currentMinute}:${currentSecond}/${totalMinute}:${totalSecond}`}</TimeInfo>
        </Wrapper>
    )
}
