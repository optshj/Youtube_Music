import styled from "styled-components";

import HeaderButton from "./HeaderButton";

const Wrapper = styled.div`
    display:flex;
    margin:0 auto;
    overflow-x: auto;
    white-space:nowrap;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large`
        max-width:${theme.widths.large}
    `}
    ${({theme}) => theme.medium`
        max-width:${theme.widths.medium}
    `}
    ${({theme}) => theme.small`
        max-width:${theme.widths.small}
    `}
    &:hover{
        &::-webkit-scrollbar-thumb{
            background-color:#606060;
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
        <Wrapper>
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
        </Wrapper>
    )
}
export default MainHeader;