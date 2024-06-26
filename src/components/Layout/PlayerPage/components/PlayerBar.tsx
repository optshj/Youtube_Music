import styled from 'styled-components';

import { IsPlayState,usePlayState } from '../../../../context/PlayStateContext';

import { IoPlaySharp,IoPlaySkipForwardSharp,IoPauseSharp} from "react-icons/io5";

interface WrapperProps {
    $isUp:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: row;
    position:absolute;
    width:100%;
    visibility: hidden;
    padding-top:8px;
    ${({theme}) => theme.small`
        visibility: ${({$isUp}:WrapperProps) => $isUp ? 'visible' : 'hidden'};
    `}
`
const LeftContent = styled.div`
    margin-left:16px;
`
const CenterContent = styled.div`
    margin-left:16px;
    justify-content: flex-start;
    display:flex;
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
    color: rgba(255,255,255,0.7);
`
const RightContent = styled.div`
    display: flex;
    margin: 0 16px;
    align-items: center;
    flex-direction: row;
    font-size:24px;
    margin-left:auto;
`
const PlayPauseWrapper = styled.div`
    display: flex;
    color: #fff;
    align-items: center;
    margin: 0 16px;
`
const PlayIcon = styled(IoPlaySharp)`
    cursor: pointer;
`
const PauseIcon = styled(IoPauseSharp)`
    cursor: pointer;
`
const NextIcon = styled(IoPlaySkipForwardSharp)`
    color: #fff;
    margin: 0 16px;
    cursor: pointer;
`

interface PlayerBarProps {
    isUp:boolean;
    onClick?:() => void;
}
export default function PlayerBar({isUp,onClick}:PlayerBarProps) {
    const isPlay = IsPlayState();
    const {togglePlayState} = usePlayState();
    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClick && onClick();
        }
    }

    return (
        <Wrapper $isUp={isUp} onClick={handleClick}>
            <LeftContent>
                <img src="https://via.placeholder.com/40x40/666.png" alt="Placeholder" onClick={handleClick}/>
            </LeftContent>

            <CenterContent>
                <Title onClick={handleClick}>Lorem ipsum</Title>
                <Artist onClick={handleClick}>Lorem ipsum</Artist>
            </CenterContent>

            <RightContent>
                <PlayPauseWrapper onClick={togglePlayState}>
                    {isPlay?<PauseIcon/>:<PlayIcon/>}
                </PlayPauseWrapper>
                <NextIcon/>
            </RightContent>
        </Wrapper>
    );
};