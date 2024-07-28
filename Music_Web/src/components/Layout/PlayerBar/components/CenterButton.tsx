import { useState } from "react";
import styled from "styled-components";

import { AiFillDislike,AiOutlineDislike,AiFillLike,AiOutlineLike } from "react-icons/ai";
import { PiDotsThreeVertical } from "react-icons/pi";

const ButtonWrapper = styled.div`
    display:flex;
    gap:8px;
    ${({theme}) => theme.medium`
        display:none;
    `}
`
const IconWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
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
`
const Menu = styled(PiDotsThreeVertical)`
    color:#909090;
`

export default function CenterButton(){
    const [isDislike,setIsDislike] = useState(false);
    const [isLike,setIsLike] = useState(false);
    return(
        <ButtonWrapper>
            <IconWrapper onClick={() => setIsDislike(!isDislike)}>
                {isDislike ? <AiFillDislike/>: <AiOutlineDislike/>}
            </IconWrapper>

            <IconWrapper onClick={() => setIsLike(!isLike)}>
                {isLike ? <AiFillLike/> : <AiOutlineLike/>}
            </IconWrapper>

            <IconWrapper>
                <Menu/>
            </IconWrapper>
        </ButtonWrapper>
    )
}