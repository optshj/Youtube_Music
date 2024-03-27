import React from "react";
import styled from "styled-components";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";


const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin:0 auto;
    gap:24px;
    padding:16px 0 0 0;
    max-width:min(calc(100vw - 452px),1478px);
    @media (max-width:1150px) and (min-width:936px){
        max-width:min(calc(100vw - 112px - 240px - 12px ),1478px);
    }
    @media (max-width:936px) and (min-width:615px){
        max-width:min(calc(100vw - 112px - 72px - 12px ),1478px);
    }
    @media (max-width:615px){
        max-width:calc(100vw - 32px);
    }
`
const Title = styled.h2`
    margin:0;
    font-size:24px;
    color:#fff;
    width:100%;
    @media(min-width:1578px) {
        font-size:45px;
    }
    @media(min-width:1150px) and (max-width:1578) {
        font-size:28px;
    }
`
const ButtonGroup = styled.div`
    display:flex;
    align-items:flex-end;
    gap:16px;
`
const ArrowIconForm = styled.div`
    width:36px;
    height:36px;
    border-radius:50%;
    border:solid 1px rgba(255,255,255,.2);
    color:#fff;
    &:hover{
        background-color:rgba(255,255,255,.1);
    }
`
interface ContentHeaderProps{
    hasScrollbar:boolean;
    isScrollLeft:boolean;
    isScrollRight:boolean;
}
function ContentHeader({hasScrollbar,isScrollLeft,isScrollRight}:ContentHeaderProps){

    const LeftButtonStyles = {
        'transform':'translate(50%,50%)',
        'color': isScrollLeft ? '#333' :'#c0c0c0',
        'transition' : 'color 0.2s linear',
    }
    const RightButtonStyles = {
        'transform':'translate(70%,50%)',
        'color': isScrollRight ? '#333' : '#c0c0c0',
        'transition' : 'color 0.2s linear',
    }
    const LeftButtonFormStyles = {
        'cursor': isScrollLeft ? '' : 'pointer',
        'backgroundColor' : isScrollLeft ? '#030303' : ''
    }
    const RightButtonFormStyles = {
        'cursor': isScrollRight ? '' : 'pointer',
        'backgroundColor' : isScrollRight ? '#030303' : ''
    }
    const ButtonGroupStyles = {
        'display': hasScrollbar ? 'flex' :'none'
    }
    
    return(
        <>
            <Wrapper>
                <Title>Lorem ipsum dolor sit amet</Title>
                <ButtonGroup style={ButtonGroupStyles}>
                    <ArrowIconForm style={LeftButtonFormStyles}>
                        <MdOutlineArrowBackIosNew style={LeftButtonStyles}/>
                    </ArrowIconForm>
                    <ArrowIconForm style={RightButtonFormStyles}>
                        <MdOutlineArrowForwardIos style={RightButtonStyles}/>
                    </ArrowIconForm>
                </ButtonGroup>
            </Wrapper>
        </>
    )
}
export default ContentHeader;