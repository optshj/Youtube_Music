import styled from "styled-components"

import { useToggle } from "../../../context/ToggleContext";

import { PiCheck } from "react-icons/pi";

const Wrapper = styled.div<{$isOpen:boolean}>`
    visibility: ${props => props.$isOpen ? "visible" : "hidden"};
    width:307px;
    border:1px solid rgba(255,255,255,0.1);
    border-radius: 2px;
    margin: 0 0 16px;
    background-color: #212121;
    position: absolute;
    right:106px;
    top:186px;
    ${({theme}) => theme.large`
        right:61px;
        top:186px;
    `}
    ${({theme}) => theme.medium`
        top:250px;
        left:134px;
    `}
    ${({theme}) => theme.small`
        top:250px;
        left:16px;
    `}
`
const Title = styled.div`
    border-bottom:1px solid rgba(255,255,255,0.1);
    padding:16px 28px 22px;
    font-size:14px;
    font-weight:400;
    line-height: 1.6;
    color:#fff;
`
const Items = styled.div`
    max-height:422px;
    background-color: #212121;
    padding:8px 0;
`
const ItemWrapper = styled.button`
    display:flex;
    height:48px;
    width:100%;
    align-items: center;
    color:#fff;
    &:hover{
        background-color: rgba(255,255,255,0.05);
    }
`
const CheckIcon = styled.div`
    box-sizing: border-box;
    margin:8px;
    width:24px;
    height:24px;
    font-size:24px;
    color:#aaa;
`
const ItemTitle = styled.div`
    font-size:14px;
    line-height:1.6;
    margin:0 8px;
    font-weight: 400;
`

interface ItemProps{
    title: string;
    isSelected: boolean;
    onClick: () => void;
}
const Item = ({title,isSelected,onClick}:ItemProps) => {
    return(
        <ItemWrapper onClick={onClick}>
            <CheckIcon>
                {isSelected && <PiCheck/>}
            </CheckIcon>
            <ItemTitle>{title}</ItemTitle>
        </ItemWrapper>
    )
}

interface DropDownProps{
    selected:string;
    setSelected:React.Dispatch<React.SetStateAction<string>>;
}
export default function DropDown({selected, setSelected}:DropDownProps){
    const { isComponentsOpen } = useToggle();

    return(
        <Wrapper $isOpen={isComponentsOpen(DropDown)}>
            <Title>정렬 기준</Title>
            <Items>
                <Item title="최근 활동" isSelected={selected==="최근 활동"} onClick={() => setSelected("최근 활동")}/>
                <Item title="최근에 저장됨" isSelected={selected==="최근에 저장됨"} onClick={() => setSelected("최근에 저장됨")}/>
                <Item title="최근 재생한 음악"  isSelected={selected==="최근 재생한 음악"} onClick={() => setSelected("최근 재생한 음악")}/>
            </Items>
        </Wrapper>
    )
}