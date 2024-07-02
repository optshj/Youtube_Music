import { useState } from "react";
import styled from "styled-components";
import ControlButton from "./PlayerControlButton";

const Wrapper = styled.div`
    display:none;
    position:absolute;
    top:calc(100% - 312px);
    width:calc(100vw - 64px);
    margin:0 32px;
    ${({theme}) => theme.small`
        display:inline-block;
    `}

`
const ExplainWrapper = styled.div`
    margin-bottom:15px;
`
const Title = styled.div`
    font-size:24px;
    font-weight:700;
    line-height:1.3;
    color:#fff;
`
const ArtistName = styled.div`
    padding-top:8px;
    font-weight:400;
    font-size:16px;
    color:rgba(255,255,255,0.7);
`
const ProgressbarWrapper = styled.div`
`
const SlidebarWrapper = styled.div`
    position:relative;
    width:100%;
    margin-top:32px;
    cursor:pointer;
    display:block;
    transform:translateY(-50%);
    background-color:#909090;
    height:3px;
    margin-bottom:10px;
`
const SlideInner = styled.div<{$length:number}>`
    position:absolute;
    width:${(props) => (props.$length)}%;
    height:3px;
    background-color:#fff;
`
const Sliderbar = styled.input`
    position:absolute;  
    width:100%;
    height:2px;
    margin:0;
    appearance:none;
    background:none;
    cursor:pointer;
    &::-webkit-slider-thumb {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: white;
        -webkit-appearance: none;
    }
`
const TimeWrapper = styled.div`
    display:flex;
    justify-content:space-between;
`
const CurrentTime = styled.div`
    color:rgba(255,255,255,.7);
    font-size:12px;
    font-weight:400;
`
const TotalTime = styled.div`
    color:rgba(255,255,255,.7);
    font-size:12px;
    font-weight:400;
`

export default function PlayerControl(){
    const initPlayTime = 0;
    const [playTime,setPlayTime] = useState(initPlayTime);
    const onChangePlayTime = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPlayTime(parseInt(e.target.value));
    }

    return(
        <Wrapper>
            <ExplainWrapper>
                <Title>Lorem ipsum</Title>
                <ArtistName>Lorem ipsum</ArtistName>
                <ProgressbarWrapper>
                    <SlidebarWrapper>
                        <SlideInner $length={playTime}/>
                        <Sliderbar type="range" max={100} min={0} value={playTime} onChange={onChangePlayTime}/>
                    </SlidebarWrapper>
                    <TimeWrapper>
                        <CurrentTime>NaN:NaN</CurrentTime>
                        <TotalTime>NaN:NaN</TotalTime>
                    </TimeWrapper>
                </ProgressbarWrapper>
            </ExplainWrapper>
            <ControlButton/>
        </Wrapper>
    )
}