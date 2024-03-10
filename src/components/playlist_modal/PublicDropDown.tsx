import React from "react";
import styled from "styled-components";

import { IoEarthOutline } from "react-icons/io5";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:12px 0;
    background:#333;
    position:fixed;
    z-index:105;
    left:30%;
    top:50%;
`
const DropDownItem = styled.li`
    display:flex;
    align-items:center;
    list-styled:none;
    cursor:pointer;
    :&hover{
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
function PublicDropDown(){
    return(
        <>
            <Wrapper>
                <DropDownItem>
                    <Icon>
                        <IoEarthOutline></IoEarthOutline>
                    </Icon>
                    <ExplainWrapper>
                        <Label>공개</Label>
                        <Desrcipt>모든 사용자가 검색하고 볼 수 있음</Desrcipt>
                    </ExplainWrapper>
                </DropDownItem>
            </Wrapper>
        </>
    )
}
export default PublicDropDown;