import styled from "styled-components";

import { IsPlayState, usePlayState } from "../../../context/PlayStateContext";

import { IoMdPlay, IoMdPause, IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
`
const PlayButton = styled(IoMdPlay)`
    color:#fff;
    width:36px;
    height:36px;
    padding:8px;
    cursor:pointer;
    margin:0 0 0 12px;
`
const PauseButton = styled(IoMdPause)`
    color:#fff;
    width:36px;
    height:36px;
    padding:8px;
    cursor:pointer;
    margin:0 0 0 12px;
`
const NextButton = styled(IoMdSkipForward)`
    color:#fff;
    padding:8px;
    cursor:pointer;
    margin:0 0 0 12px;
`
const PrevButton = styled(IoMdSkipBackward)`
    color:#fff;
    padding:8px;
    cursor:pointer;
    margin:0 0 0 12px;
`

function LeftControl(){
    const isPlay = IsPlayState();
    const {togglePlayState} = usePlayState();

    return(
        <Wrapper>
            <PrevButton/>
            <div onClick={togglePlayState}>
                {isPlay?<PauseButton/>:<PlayButton/>}
            </div>
            <NextButton/>
        </Wrapper>
    )
}
export default LeftControl;