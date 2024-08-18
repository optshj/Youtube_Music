import { useState } from "react"
import styled from "styled-components"

import { useSongData } from "../../../../context/SongDataConetext"

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
`
const SlideBackground = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    height: 2px;
    &:hover {
        height: 4px;
    }
`
const ProgressInner = styled.div<{ $length: number }>`
    position: absolute;
    width: ${props => props.$length}%;
    height: 100%;
    background-color: #f00;
`
const ProgressSlide = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    cursor: pointer;
    &::-webkit-slider-thumb {
        position: relative;
        top: -1px;
        -webkit-appearance: none;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background-color: #f00;
        visibility: hidden;
        transition: all 0.2s ease;
    }
    &:hover {
        &::-webkit-slider-thumb {
            visibility: visible;
        }
    }
    &:active {
        &::-webkit-slider-thumb {
            height: 20px;
            width: 20px;
        }
    }
`
const PlayTime = styled.span`
    position: absolute;
    color: #fff;
    font-size: 12px;
    line-height: 1.3;
    padding: 4px 8px;
    border-radius: 2px;
    background-color: #212121;
    pointer-events: none;
    white-space: nowrap;
`
export default function Progressbar({ onClick }: { onClick: (event: React.MouseEvent<HTMLDivElement>) => void }) {
    const [playTimeRatio, setPlayTimeRatio] = useState(0)
    const [playTime, setPlayTime] = useState(0)
    const { songData } = useSongData()
    const playTimeMinute = Math.floor(playTime / 60)
        .toString()
        .padStart(1, "0")
    const playTimeSecond = (playTime % 60).toString().padStart(2, "0")

    const onChangePlayTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayTimeRatio(parseInt(e.target.value, 10))
        setPlayTime(Math.floor(songData.playTime * (parseInt(e.target.value, 10) / 100)))
    }

    return (
        <Wrapper onClick={onClick}>
            <SlideBackground>
                <ProgressInner $length={playTimeRatio} />
                <ProgressSlide type={"range"} max={100} min={0} value={playTimeRatio} onChange={onChangePlayTime} />
                <PlayTime>{`${playTimeMinute}:${playTimeSecond}`}</PlayTime>
            </SlideBackground>
        </Wrapper>
    )
}
