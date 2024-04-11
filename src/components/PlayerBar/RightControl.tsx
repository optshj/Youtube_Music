import { useState } from "react";
import styled from "styled-components";

import { usePlayerPage } from "../../context/PlayerPageContext";

import { PiRepeatThin,PiRepeatOnceThin,PiShuffleThin } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

import SoundSlidebar from "./VolumSide";

const Wrapper = styled.div`
    display:flex;
`
const ButtonWrapper = styled.div`
    display:flex;
`
const ShuffleButton = styled(PiShuffleThin)`
    color:#7a7a7a;
    font-size:28px;
    margin-right:8px;
    padding:8px;
    cursor:pointer;
    &:active{
        color:#fff;
    }
`
const RepeatWrapper = styled.div`
    cursor:pointer;
`
const RepeatButtonOne = styled(PiRepeatOnceThin)`
    color:#fff;
    font-size:28px;
    margin-right:8px;
    padding:8px;
`
const RepeatButton = styled(PiRepeatThin)<{$isRepeat:number}>`
    color: ${(props) => (props.$isRepeat===1 ? '#7a7a7a':'#fff')};
    font-size:28px;
    margin-right:8px;
    padding:8px;
`
const PlayerPageButton = styled(IoMdArrowDropdown)<{$isOpen:boolean}>`
    color:#fff;
    cursor:pointer;
    padding:8px;
    font-size:32px;
    transform: ${(props) => (props.$isOpen ? 'rotate(0deg)':'rotate(180deg)')};
    transition:transform 0.3s ease-in-out;
`
function RightControl(){
    const [isOpen,setIsOpen] = useState(false);
    const [repeatStatus,setRepeatStatus] = useState(1); // 0:한곡반복 1:반복안함 2:재생목록반복
    const {click} = usePlayerPage();

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
            <SoundSlidebar></SoundSlidebar>
            <ButtonWrapper>
                <RepeatWrapper onClick={onRepeat}>
                    {repeatStatus? <RepeatButton $isRepeat={repeatStatus}></RepeatButton> : <RepeatButtonOne></RepeatButtonOne>}
                </RepeatWrapper>
                <ShuffleButton></ShuffleButton>
            </ButtonWrapper>
            <PlayerPageButton onClick={() => {setIsOpen(!isOpen);click()}} $isOpen={isOpen}></PlayerPageButton>
        </Wrapper>
    )
}
export default RightControl;