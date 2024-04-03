import { useState } from "react";
import styled from "styled-components";

import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { IoMdSkipBackward } from "react-icons/io";


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
const ForwardButton = styled(IoMdSkipForward)`
    color:#fff;
    padding:8px;
    cursor:pointer;
    margin:0 0 0 12px;
`
const BackwardButton = styled(IoMdSkipBackward)`
    color:#fff;
    padding:8px;
    cursor:pointer;
    margin:0 0 0 12px;
`
const PlayPauseWrapper = styled.div`
`
function LeftControl(){
    const [isPlay,setIsPlay] = useState(false);

    const onChange = () => {
        setIsPlay(!isPlay);
    }

    return(
        <Wrapper>
            <BackwardButton></BackwardButton>
            <PlayPauseWrapper onClick={onChange}>
                {isPlay?<PlayButton></PlayButton>:<PauseButton></PauseButton>}
            </PlayPauseWrapper>
            <ForwardButton></ForwardButton>
        </Wrapper>
    )
}
export default LeftControl;