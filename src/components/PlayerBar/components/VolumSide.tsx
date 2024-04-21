import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    margin-right:8px;
    align-items:center;
`
const SlideBackground = styled.div`
    position:relative;
    width:70px;
    height:3px;
    background-color:#909090;
`
const SlideInner = styled.div<{$length:number}>`
    position:absolute;
    width:${(props) => (props.$length/100*70)}px;
    height:3px;
    background-color:#fff;
`
const Slidebar = styled.input`
    position:absolute;  
    width:72px;
    margin:0;
    top:-3px;
    appearance:none;
    background:none;
    &::-webkit-slider-thumb{
        width:10px;
        height:10px;
        border-radius:50%;
        background-color:white;
        -webkit-appearance:none;
    }
    &:active{
        &::-webkit-slider-thumb{
            transform:scale(1.3);
            transition:transform 0.2s ease-in-out;
        }
    }
`
function VolumSide(){
    const initRangeValue = 10;
    const [rangeValue,setRangeValue] = useState(initRangeValue);
    const onChangeVolume = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(parseInt(e.target.value));
    }

    return(
        <Wrapper>
            <SlideBackground>
                <SlideInner $length={rangeValue}/>
                <Slidebar type="range" max={100} min ={0} value={rangeValue} onChange={onChangeVolume}/>
            </SlideBackground>
        </Wrapper>
    )
}
export default VolumSide;