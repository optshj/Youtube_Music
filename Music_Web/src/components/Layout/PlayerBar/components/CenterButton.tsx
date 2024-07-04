import { useState} from "react";
import styled from "styled-components";

import { AiFillDislike,AiOutlineDislike,AiFillLike,AiOutlineLike } from "react-icons/ai";
import { PiDotsThreeVertical } from "react-icons/pi";

const ButtonWrapper = styled.div`
    display:flex;
    gap:8px;
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
const Icon = styled.div`
    transform:translate(20%,20%);
`
const Menu = styled(PiDotsThreeVertical)`
    color:#909090;
    transform:translate(25%,25%);
`

export default function CenterButton(){
    const [isDislike,setIsDislike] = useState(false);
    const [isLike,setIsLike] = useState(false);
    return(
        <ButtonWrapper>
            <IconWrapper>
                <Icon onClick={() => setIsDislike(!isDislike)}>
                    {isDislike ? <AiFillDislike/>: <AiOutlineDislike/>}
                </Icon>
            </IconWrapper>

            <IconWrapper>
                <Icon onClick={() => setIsLike(!isLike)}>
                    {isLike ? <AiFillLike/> : <AiOutlineLike/>}
                </Icon>
            </IconWrapper>

            <IconWrapper>
                <Menu/>
            </IconWrapper>
        </ButtonWrapper>
    )
}