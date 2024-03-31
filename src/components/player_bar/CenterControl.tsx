import React, { useState } from "react";
import styled from "styled-components";

import { AiFillDislike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { PiDotsThreeVertical } from "react-icons/pi";


const ImgWrapper = styled.div`
`
const ContentInfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 8px 0 16px;
`
const Title = styled.div`
    color:#fff;
    font-size:14px;
`
const ExplainWrapper = styled.div`
    display:flex;
    flex-direction:row;
`
const Explain = styled.div`
    font-size:14px;
    color:rgba(255,255,255,0.7);
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
`
const Dot = styled.div`
    font-size:14px;
    color:rgba(255,255,255,0.7);    
`
const ButtonWrapper = styled.div`
    display:flex;
`
const LikeWrapper = styled.div`
    color:#fff;
    border-radius:50%;
    width:36px;
    height:36px;
    &:hover{
        background-color:rgba(255,255,255,0.2);
    }
    @media (max-width:936px){
        display:none;
    }
`
const Dislike = styled.div`
    cursor:pointer;
    margin-right:8px;
    font-size:24px;
    transform:translate(20%,20%);
`
const Like = styled.div`
    cursor:pointer;
    font-size:24px;
    transform:translate(20%,10%);
`
const MenuWrapper = styled.div`
    margin:0 16px 0 8px;
    border-radius:50%;
    width:36px;
    height:36px;
    &:hover{
        background-color:rgba(255,255,255,0.2);
    }
    cursor:pointer;
`
const Menu = styled(PiDotsThreeVertical)`
    width:24px;
    height:24px;
    color:#909090;
    transform:translate(25%,25%);
`
function CenterControl(){
    const [isDislike,setIsDislike] = useState(false);
    const [isLike,setIsLike] = useState(false);

    return(
        <>
            <ImgWrapper>
                <img src="https://via.placeholder.com/40x40/666.png" alt="Placeholder"/>
            </ImgWrapper>
            <ContentInfoWrapper>
                <Title>Lorem ipsum</Title>
                <ExplainWrapper>
                    <Explain>Lorem ipsum</Explain>
                    <Dot> • </Dot>
                    <Explain>Lorem</Explain>
                    <Dot> • </Dot>
                    <Dot> 2024 </Dot>
                </ExplainWrapper>
            </ContentInfoWrapper>
            <ButtonWrapper>
                <LikeWrapper>
                    <Dislike onClick={() => setIsDislike(!isDislike)}>
                        {isDislike ? <AiFillDislike></AiFillDislike> : <AiOutlineDislike></AiOutlineDislike>}
                    </Dislike>
                </LikeWrapper>
                <LikeWrapper>
                    <Like onClick={() => setIsLike(!isLike)}>
                        {isLike ? <AiFillLike></AiFillLike> : <AiOutlineLike></AiOutlineLike>}
                    </Like>
                </LikeWrapper>
                <MenuWrapper>
                    <Menu></Menu>
                </MenuWrapper>
            </ButtonWrapper>
        </>
    )
}
export default CenterControl;