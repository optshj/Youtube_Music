import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    padding-bottom:24px;
    ${({theme}) => theme.small`
        padding-top:16px;
    `}
`
const ButtonWrapper = styled.div`
    display:flex;
    border-radius:15% / 50%;
    background-color:#212121;
    opacity:0.7;
    height:32px;
`
const Button = styled.button<{$isSelect:boolean}>`
    padding:0 16px;
    font-size:14px;
    color:${(props) => (props.$isSelect ? '#fff':'rgba(255,255,255,.3)')};
    z-index:${(props) => (props.$isSelect ? '1':'0')};
    background-color:${(props) => (props.$isSelect ? '#383838': '#212121')};
    border-radius:25% / 50%;
    line-height:1.3;
    border:transparent;
    cursor:pointer;
    white-space:nowrap;
`

export default function MainSelectButton(){
    const [selectType,setSelectType] = useState(0);
    const handleClick = (type:number) => {
        setSelectType(type);
    }

    return(
        <Wrapper>
            <ButtonWrapper>
                <Button $isSelect={selectType === 0} onClick={() => handleClick(0)}> 노래 </Button>
                <Button $isSelect={selectType === 1} onClick={() => handleClick(1)}> 동영상 </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}