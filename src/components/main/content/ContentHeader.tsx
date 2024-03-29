import React from "react";
import styled,{css} from "styled-components";

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
    @media (max-width:1150px){
        max-width:min(calc(100vw - 112px - 240px - 12px ),1478px);
    }
    @media (max-width:936px){
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
    @media(min-width:1150px) and (max-width:1578px) {
        font-size:28px;
    }
`
const ButtonGroup = styled.div<{ hasScrollbar :boolean}>`
    display:flex;
    align-items:flex-end;
    gap:16px;
    display: ${(props) => (props.hasScrollbar ? 'flex' : 'none')};
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
const LeftIcon = styled(MdOutlineArrowBackIosNew)<{isScrollLeft:boolean}>`
    transform:translate(50%,50%);
    color: ${(props) => (props.isScrollLeft ?'#333':'#c0c0c0')};
    transition: color 0.2s linear;
`
const RightIcon = styled(MdOutlineArrowForwardIos)<{isScrollRight:boolean}>`
    transform:translate(70%,50%);
    color: ${(props) => (props.isScrollRight ?'#333':'#c0c0c0')};
    transition: color 0.2s linear;
`
interface ContentHeaderProps{
    hasScrollbar:boolean;
    isScrollLeft:boolean;
    isScrollRight:boolean;
}
function ContentHeader({hasScrollbar,isScrollLeft,isScrollRight}:ContentHeaderProps){

    const LeftButtonFormStyles = {
        'cursor': isScrollLeft ? '' : 'pointer',
        'backgroundColor' : isScrollLeft ? '#030303' : ''
    }
    const RightButtonFormStyles = {
        'cursor': isScrollRight ? '' : 'pointer',
        'backgroundColor' : isScrollRight ? '#030303' : ''
    }
    return(
        <>
            <Wrapper>
                <Title>Lorem ipsum dolor sit amet</Title>
                <ButtonGroup hasScrollbar={hasScrollbar}>
                    <ArrowIconForm style={LeftButtonFormStyles}>
                            <LeftIcon isScrollLeft={isScrollLeft}></LeftIcon>
                    </ArrowIconForm>
                    <ArrowIconForm style={RightButtonFormStyles}>
                        <RightIcon isScrollRight={isScrollRight}></RightIcon>
                    </ArrowIconForm>
                </ButtonGroup>
            </Wrapper>
        </>
    )
}
export default ContentHeader;