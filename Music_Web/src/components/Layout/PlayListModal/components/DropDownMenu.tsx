import { ReactElement } from "react";
import styled from "styled-components";

import { SelectStatus, useDropdown } from "../../../../context/SelecPublicContext";

import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GrConnect } from "react-icons/gr";

const Wrapper = styled.div`
    position: fixed;
    top:60%;
    padding:12px 0;
    background:#333;
    z-index:5;
`
const DropDownItemWrapper = styled.li<{$isSelect:boolean}>`
    display:flex;
    align-items:center;
    cursor:pointer;
    background-color:${(props) => (props.$isSelect ? '#484848':'')};
    &:hover{
        background-color: ${(props) => (props.$isSelect ? '#484848' : '#212121')};
    }
`
const Icon = styled.div`
    color:#aaa;
    font-size:20px;
    padding:0 18px;
`
const ExplainWrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:8px 32px 8px 0;
`
const Label = styled.div`
    color:#fff;
    font-size:14px;
`
const Desrcipt = styled.div`
    color:rgba(255,255,255,0.7);
    font-size:14px;
`
interface DropDownItemProps{
    onClick:()=>void;
    label:string;
    description:string;
    icon:ReactElement;
    $isSelect:boolean;
}
const DropDownItem = ({onClick,label,description,icon,$isSelect}:DropDownItemProps) => {
    return(
        <DropDownItemWrapper onClick={onClick} $isSelect={$isSelect}>
                <Icon>{icon}</Icon>
                <ExplainWrapper>
                    <Label>{label}</Label>
                    <Desrcipt>{description}</Desrcipt>
                </ExplainWrapper>
        </DropDownItemWrapper>
    )
}   

export default function DropDownMenu({onClose}:{onClose:()=>void}){
    const {selectPublic,selectPartial,selectPrivate} = useDropdown();
    const selectStatus = SelectStatus();

    return(
        <Wrapper onClick={onClose}>
            <DropDownItem
                onClick={selectPublic}
                $isSelect={selectStatus === 0}
                icon={<IoEarthOutline />}
                label="공개"
                description="모든 사용자가 검색하고 볼 수 있음"/>
            <DropDownItem
                onClick={selectPartial}
                $isSelect={selectStatus === 1}
                icon={<GrConnect />}
                label="일부 공개"
                description="링크가 있는 모든 사용자가 볼 수 있음"/>
            <DropDownItem
                onClick={selectPrivate}
                $isSelect={selectStatus === 2}
                icon={<CiLock />}
                label="비공개"
                description="나만 볼 수 있음"/>
        </Wrapper>
    )
}