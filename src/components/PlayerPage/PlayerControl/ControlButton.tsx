import styled from "styled-components";

import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { IoMdSkipBackward } from "react-icons/io";
import { PiRepeatThin } from "react-icons/pi";
import { PiRepeatOnceThin } from "react-icons/pi";
import { PiShuffleThin } from "react-icons/pi";
import { useState } from "react";

const Wrapper = styled.div`
    align-items:center;
    color:#fff;
    display:flex;
    justify-content:space-between;
`
const ShuffleButton = styled(PiShuffleThin)`
    width:24px;
    height:24px;
    color:#7a7a7a;
    &:active{
        color:#fff;
    }
`
const PrevButton = styled(IoMdSkipBackward)`
    width:24px;
    height:24px;
`
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
const NextButton = styled(IoMdSkipForward)`
    width:24px;
    height:24px;
`
const RepeatWrapper = styled.div`
    width:24px;
    height:24px;
`
const RepeatButton = styled(PiRepeatThin)<{$isRepeat:number}>`
    width:24px;
    height:24px;
    color: ${(props) => (props.$isRepeat===1 ? '#7a7a7a':'#fff')};
`
const RepeatButtonOne = styled(PiRepeatOnceThin)`
    width:24px;
    height:24px;
    color:#fff;
`
function ControlButton(){
    const [isPlay,setIsPlay] = useState(true);
    const [repeatStatus,setRepeatStatus] = useState(1);
    const onRepeat = () => {
        if (repeatStatus === 2) {
            setRepeatStatus(0);
        }
        else {
            setRepeatStatus(repeatStatus+1);
        }
    }

    return(
        <Wrapper>
            <ShuffleButton></ShuffleButton>
            <PrevButton></PrevButton>
            <PlayPauseWrapper onClick={() => setIsPlay(!isPlay)}>
                {isPlay ? <PlayButton></PlayButton> : <PauseButton></PauseButton>}
            </PlayPauseWrapper>
            <NextButton></NextButton>
            <RepeatWrapper onClick={onRepeat}>
                {repeatStatus? <RepeatButton $isRepeat={repeatStatus}></RepeatButton> : <RepeatButtonOne></RepeatButtonOne>}
            </RepeatWrapper>
        </Wrapper>
    )
}
export default ControlButton;