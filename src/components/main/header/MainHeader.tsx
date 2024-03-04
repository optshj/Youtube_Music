import React from "react";
import styled from "styled-components";
import HeaderButton from "./HeaderButton";

const MainHeaderForm = styled.div`
    display:flex;
    margin:0 auto;
    overflow-x:auto;
    white-space:nowrap;
    width:min(calc(100vw - 200px - 240px - 12px ),1478px);
    ::-webkit-scrollbar {
        display: none;
      }
      &:hover {
        ::-webkit-scrollbar {
          display: block;
        }
      }
    & > *:first-child {
        margin-left: 0;
    }
    
    & > *:last-child {
        margin-right: 0;
    }
    
`

function MainHeader(){
    return(
        <>
            <MainHeaderForm>
                <HeaderButton name="운동"></HeaderButton>
                <HeaderButton name="에너지 충전"></HeaderButton>
                <HeaderButton name="휴식"></HeaderButton>
                <HeaderButton name="출퇴근길"></HeaderButton>
                <HeaderButton name="행복한 기분"></HeaderButton>
                <HeaderButton name="집중"></HeaderButton>
                <HeaderButton name="로맨스"></HeaderButton>
                <HeaderButton name="파티"></HeaderButton>
                <HeaderButton name="슬픔"></HeaderButton>
                <HeaderButton name="잠잘 때"></HeaderButton>
            </MainHeaderForm>
        </>
    )
}
export default MainHeader;