import styled from "styled-components";

import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GrConnect } from "react-icons/gr";


const DropDownItemWrapper = styled.li`
    display:flex;
    align-items:center;
    cursor:pointer;
    &:hover{
        background-color:#212121;
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

function DropDownItem() {
    return(
        <>
            <DropDownItemWrapper>
                <Icon>
                    <IoEarthOutline/>
                </Icon>
                <ExplainWrapper>
                    <Label>공개</Label>
                    <Desrcipt>모든 사용자가 검색하고 볼 수 있음</Desrcipt>
                </ExplainWrapper>
            </DropDownItemWrapper>

            <DropDownItemWrapper>
                <Icon>
                    <GrConnect />
                </Icon>
                <ExplainWrapper>
                    <Label>일부 공개</Label>
                    <Desrcipt>링크가 있는 모든 사용자가 볼 수 있음</Desrcipt>
                </ExplainWrapper>
            </DropDownItemWrapper>

            <DropDownItemWrapper>
                <Icon>
                    <CiLock />
                </Icon>
                <ExplainWrapper>
                    <Label>비공개</Label>
                    <Desrcipt>나만 볼 수 있음</Desrcipt>
                </ExplainWrapper>
            </DropDownItemWrapper>
        </>
    )
}
export default DropDownItem;