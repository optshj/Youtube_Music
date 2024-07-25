import { useState } from "react";
import styled from "styled-components";

import { IsPlayState,usePlayState } from "../../../../context/PlayStateContext";

import { IoMdPlay, IoMdPause, IoMdSkipForward,IoMdSkipBackward  } from "react-icons/io";
import { PiRepeatThin,PiRepeatOnceThin,PiShuffleThin } from "react-icons/pi";

const Wrapper = styled.div`
    align-items:center;
    color:#fff;
    display:flex;
    justify-content:space-between;
`
const IconButton = styled.div<{ active?: boolean }>`
    width: 24px;
    height: 24px;
    color: ${({ active }) => (active ? "#fff" : "#7a7a7a")};
    cursor: pointer;

    &:active {
        color: #fff;
    }
`;
const PlayPauseWrapper = styled.div`
    width:72px;
    height:72px;
    background-color:#fff;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    display:flex;
    cursor:pointer;
`
const PlayButton = styled(IoMdPlay)`
    color:#000000;
    width:32px;
    height:32px;
`
const PauseButton = styled(IoMdPause)`
    color:#000000;
    width:32px;
    height:32px;
`
const RepeatButton = styled(PiRepeatThin)<{$isRepeat:number}>`
    width:24px;
    height:24px;
    color: ${props => props.$isRepeat===1 ? '#7a7a7a':'#fff'};
    cursor: pointer;
`
const RepeatButtonOne = styled(PiRepeatOnceThin)`
    width:24px;
    height:24px;
    color:#fff;
    cursor: pointer;
`

export default function PlayerControlButton(){
    const [repeatStatus,setRepeatStatus] = useState(1);
    const isPlay = IsPlayState();
    const { togglePlayState } = usePlayState();

    const onRepeat = () => {
        setRepeatStatus((prev) => (prev === 2 ? 0 : prev + 1));
    }

    return(
        <Wrapper>
            <IconButton as={PiShuffleThin} />
            <IconButton as={IoMdSkipBackward} />

            <PlayPauseWrapper onClick={togglePlayState}>
                {isPlay ? <PauseButton/>:<PlayButton/>}
            </PlayPauseWrapper>

            <IconButton as={IoMdSkipForward} />

            <IconButton onClick={onRepeat}>
                {repeatStatus? <RepeatButton $isRepeat={repeatStatus}/> : <RepeatButtonOne/>}
            </IconButton>
        </Wrapper>
    )
}