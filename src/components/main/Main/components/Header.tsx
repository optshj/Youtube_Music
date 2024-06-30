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

export default function MainHeader(){
    return(
        <Wrapper>
            <HeaderButton tag="운동"/>
            <HeaderButton tag="에너지 충전"/>
            <HeaderButton tag="휴식"/>
            <HeaderButton tag="출퇴근길"/>
            <HeaderButton tag="행복한 기분"/>
            <HeaderButton tag="집중"/>
            <HeaderButton tag="로맨스"/>
            <HeaderButton tag="파티"/>
            <HeaderButton tag="슬픔"/>
            <HeaderButton tag="잠잘 때"/>
        </Wrapper>
    )
}