import React,{useState} from "react";
import styled from "styled-components";

import { IoEarthOutline } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";

import PublicDropDown from "./dropdown/PublicDropDown";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    width:185px;
    @media (max-width:280px) {
        width:100%;
    }
`
const Text = styled.div`
    color:#aaa;
    font-size:12px;
    padding:0 0 6px;
`
const DropDownBox = styled.div`
    display:flex;
    flex-direction:row;
    align-itmes:center;
`
const IconFont = styled.div`
    color:#aaa;
    font-size:24px;
    padding-left:4px;
`
const UnderLine = styled.div`
    border-bottom:1px solid #606060;
    padding:0;
    width:100%;
`
const ArrowFont = styled.div`
    color:#919191;
    position:relative;
    top:6px;
`
const StateForm = styled.div`
    width:100%;
    left:10px;
    color:white;
    font-size:14px;
    top:4px;
    position:relative;
`
function SelectPublic(){
    const [openDropDown,setOpenDropDown] = useState(false);
    return(
        <>
            <Wrapper>
                <Text>공개 범위 설정</Text>
                <DropDownBox onClick={() => setOpenDropDown(true)}>
                    <IconFont>
                        <IoEarthOutline />
                    </IconFont>
                    <StateForm>
                        공개
                    </StateForm>

                    <ArrowFont>
                        <IoChevronDownSharp />
                    </ArrowFont>
                </DropDownBox>
                <UnderLine></UnderLine>
                {
                    openDropDown && <PublicDropDown></PublicDropDown>
                }
            </Wrapper>
        
        </>
    )
}

export default SelectPublic;