import { useState } from "react";
import styled from "styled-components";

import { AiFillDislike,AiOutlineDislike,AiFillLike,AiOutlineLike } from "react-icons/ai";
import { PiDotsThreeVertical } from "react-icons/pi";

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
    white-space: nowrap;
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
const IconWrapper = styled.div`
    color:#fff;
    border-radius:50%;
    width:36px;
    height:36px;
    font-size:24px;
    cursor: pointer;
    &:hover{
        background-color:rgba(255,255,255,0.2);
    }
    &:active{
        background-color: rgba(255,255,255,0.3);
    }
    ${({theme}) => theme.medium`
        display:none;
    `}
`
const Dislike = styled.div`
    margin-right:8px;
    transform:translate(20%,20%);
`
const Like = styled.div`
    transform:translate(20%,20%);
`
const Menu = styled(PiDotsThreeVertical)`
    color:#909090;
    transform:translate(25%,25%);
`

function CenterControl(){
    const [isDislike,setIsDislike] = useState(false);
    const [isLike,setIsLike] = useState(false);

    return(
        <>
            <img src="https://via.placeholder.com/40x40/666.png" alt="Placeholder"/>
            <ContentInfoWrapper>
                <Title>Lorem ipsum</Title>
                <ExplainWrapper>
                    <Explain>Lorem ipsum</Explain>
                    <Dot>&nbsp;•&nbsp;</Dot>
                    <Explain>Lorem</Explain>
                    <Dot>&nbsp;•&nbsp;</Dot>
                    <Dot>2024</Dot>
                </ExplainWrapper>
            </ContentInfoWrapper>
            <ButtonWrapper>
                <IconWrapper>
                    <Dislike onClick={() => setIsDislike(!isDislike)}>
                        {isDislike ? <AiFillDislike/>: <AiOutlineDislike/>}
                    </Dislike>
                </IconWrapper>

                <IconWrapper>
                    <Like onClick={() => setIsLike(!isLike)}>
                        {isLike ? <AiFillLike/> : <AiOutlineLike/>}
                    </Like>
                </IconWrapper>

                <IconWrapper>
                    <Menu/>
                </IconWrapper>
            </ButtonWrapper>
        </>
    )
}
export default CenterControl;