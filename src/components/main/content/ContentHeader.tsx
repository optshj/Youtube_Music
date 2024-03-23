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
`
function ContentHeader(){
    return(
        <>
            <Wrapper>
                <Title>Lorem ipsum dolor sit amet</Title>
                <ButtonGroup>
                    <ArrowIconForm>
                        <MdOutlineArrowBackIosNew style={{'transform':'translate(50%,50%)'}}/>
                    </ArrowIconForm>
                    <ArrowIconForm>
                        <MdOutlineArrowForwardIos style={{'transform':'translate(70%,50%)'}}/>
                    </ArrowIconForm>
                </ButtonGroup>
            </Wrapper>
        </>
    )
}
export default ContentHeader;