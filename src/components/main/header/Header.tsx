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
            <HeaderButton tag="운동"></HeaderButton>
            <HeaderButton tag="에너지 충전"></HeaderButton>
            <HeaderButton tag="휴식"></HeaderButton>
            <HeaderButton tag="출퇴근길"></HeaderButton>
            <HeaderButton tag="행복한 기분"></HeaderButton>
            <HeaderButton tag="집중"></HeaderButton>
            <HeaderButton tag="로맨스"></HeaderButton>
            <HeaderButton tag="파티"></HeaderButton>
            <HeaderButton tag="슬픔"></HeaderButton>
            <HeaderButton tag="잠잘 때"></HeaderButton>
        </Wrapper>
    )
}
export default MainHeader;