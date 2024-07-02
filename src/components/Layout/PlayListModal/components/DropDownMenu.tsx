import styled from "styled-components";

import { SelectStatus, useDropdown } from "../../../../context/SelecPublicContext";

import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GrConnect } from "react-icons/gr";

const Wrapper = styled.div`
    position: fixed;
    top:60%;
    display:flex;
    flex-direction:column;
    box-sizing: border-box;
    padding:12px 0;
    background:#333;
    z-index:5;
`
const DropDownItemWrapper = styled.li<{$isSelect:boolean}>`
    display:flex;
    align-items:center;
    cursor:pointer;
    &:hover{
        background-color: ${(props) => (props.$isSelect ? '#484848' : '#212121')};
    }
    background-color:${(props) => (props.$isSelect ? '#484848':'')};
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

export default function DropDownMenu() {
    const {selectPublic,selectPartial,selectPrivate} = useDropdown();
    const selectStatus = SelectStatus();

    return(
        <Wrapper>
            <DropDownItemWrapper onClick={selectPublic} $isSelect={selectStatus === 0}>
                <Icon>
                    <IoEarthOutline/>
                </Icon>
                <ExplainWrapper>
                    <Label>공개</Label>
                    <Desrcipt>모든 사용자가 검색하고 볼 수 있음</Desrcipt>
                </ExplainWrapper>
            </DropDownItemWrapper>

            <DropDownItemWrapper onClick={selectPartial} $isSelect={selectStatus === 1}>
                <Icon>
                    <GrConnect />
                </Icon>
                <ExplainWrapper>
                    <Label>일부 공개</Label>
                    <Desrcipt>링크가 있는 모든 사용자가 볼 수 있음</Desrcipt>
                </ExplainWrapper>
            </DropDownItemWrapper>

            <DropDownItemWrapper onClick={selectPrivate} $isSelect={selectStatus === 2}>
                <Icon>
                    <CiLock />
                </Icon>
                <ExplainWrapper>
                    <Label>비공개</Label>
                    <Desrcipt>나만 볼 수 있음</Desrcipt>
                </ExplainWrapper>
            </DropDownItemWrapper>
        </Wrapper>
    )
}