import {useEffect, useRef, useState} from "react";
import styled from "styled-components";

import { IoChevronDownSharp } from "react-icons/io5";

import PublicDropDown from "./DropDown/PublicDropDown";
import PublicStatus from "./PublicStatus";

const UnderLine = styled.div`
    position:absolute;
    border-bottom:1px solid #606060;
    padding:0;
    height:1px;
    width:100%;
`
const UnderLineActive = styled.div`
    position:absolute;
    border-bottom:2px solid #3ea6ff;
    padding:0;
    width:100%;
    transform:scaleX(0);
    height:1px;
    transition:all 0.25s ease-in-out;
`
const UnderLineWrapper = styled.div`
    position:relative;
`
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
    &:active{
        & + ${UnderLineWrapper} ${UnderLineActive}{
            transform:scaleX(1);
        }
    }
`
const ArrowFont = styled.div`
    color:#919191;
    position:relative;
    top:6px;
`

function SelectPublic(){
    const [openDropDown,setOpenDropDown] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutside = (e:MouseEvent) => {
            if (componentRef.current && !componentRef.current.contains(e.target as Node)){
                setOpenDropDown(false);
            }
        }
        document.addEventListener('mousedown',onClickOutside);
        return () => {
            document.removeEventListener('mousedown',onClickOutside);
        }
    })

    return(
        <Wrapper ref={componentRef}>
            <Text>공개 범위 설정</Text>
            <DropDownBox onClick={() => setOpenDropDown(true)}>

                <PublicStatus></PublicStatus>

                <ArrowFont>
                    <IoChevronDownSharp />
                </ArrowFont>
            </DropDownBox>
            
            <UnderLineWrapper>
                <UnderLine></UnderLine>
                <UnderLineActive></UnderLineActive>
            </UnderLineWrapper>

            {
                openDropDown && 
                <div onClick={()=> setOpenDropDown(false)}>
                    <PublicDropDown></PublicDropDown>
                </div>
            }
        </Wrapper>
    )
}
export default SelectPublic;