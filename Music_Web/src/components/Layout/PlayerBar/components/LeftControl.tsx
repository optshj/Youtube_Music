import styled from "styled-components";

import { IsPlayState, usePlayState } from "../../../../context/PlayStateContext";

import { IoMdPlay, IoMdPause, IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
`
const IconButton = styled.div<{$isBig?: boolean}>`
    color: #fff;
    padding: 8px;
    cursor: pointer;
    margin: 0 0 0 12px;
    ${props => props.$isBig ? 'width: 36px; height: 36px;' : ''}
`;

export default function LeftControl(){
    const isPlay = IsPlayState();
    const {togglePlayState} = usePlayState();

    return(
        <Wrapper>
            <IconButton as={IoMdSkipBackward}/>
            <div onClick={togglePlayState}>
                {isPlay ? 
                    <IconButton as={IoMdPause} $isBig={true}/>
                    :<IconButton as={IoMdPlay} $isBig={true}/>}
            </div>
            <IconButton as={IoMdSkipForward}/>
        </Wrapper>
    )
}