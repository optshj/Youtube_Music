import { useState } from "react";
import styled from "styled-components";

import { useToggle } from "../../../../context/ToggleContext";

import { PiRepeatThin,PiRepeatOnceThin,PiShuffleThin } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

import SoundSlide from "./VolumSide";
import PlayerPage from "../../PlayerPage/PlayerPage";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-right:4px;
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
    color: ${props => props.$isRepeat===1 ? '#7a7a7a':'#fff'};
    font-size:28px;
    margin-right:8px;
    padding:8px;
`
const PlayerPageButton = styled(IoMdArrowDropdown)<{$isOpen:boolean}>`
    color:#fff;
    cursor:pointer;
    padding:8px;
    font-size:32px;
    transform: ${props => props.$isOpen ? 'rotate(0deg)':'rotate(180deg)'};
    transition:transform 0.3s ease-in-out;
`

interface RightControlProps{
    onClick:(e:React.MouseEvent<HTMLDivElement>)=>void;
}
export default function RightContent({onClick}:RightControlProps){
    const [repeatStatus,setRepeatStatus] = useState(1); // 0:한곡반복 1:반복안함 2:재생목록반복
    const { toggleComponent,isComponentsOpen } = useToggle();

    const onRepeat = () => {
        setRepeatStatus((prev) => (prev === 2 ? 0 : prev + 1));
    }

    return(
        <Wrapper>
            <SoundSlide/>
            <ButtonWrapper onClick={onClick}>
                <RepeatWrapper onClick={onRepeat}>
                    {repeatStatus? <RepeatButton $isRepeat={repeatStatus}/>:<RepeatButtonOne/>}
                </RepeatWrapper>
                <ShuffleButton/>
            </ButtonWrapper>
            <PlayerPageButton onClick={() => toggleComponent(PlayerPage)} $isOpen={isComponentsOpen(PlayerPage)}/>
        </Wrapper>
    )
}