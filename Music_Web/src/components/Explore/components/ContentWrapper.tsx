import { useRef } from "react"
import styled from "styled-components"

import HeaderScrollButton from "../../Common/Buttons/HeaderScrollButton"

const Wrapper = styled.div`
`
const HeaderWrapper = styled.div`
    display:flex;
    gap:24px;
    margin:0 auto;
    padding:32px 0 16px 0;
    padding-bottom:0;
    justify-content: space-between;
    align-items: center;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium` max-width:${theme.widths.medium}`}
    ${({theme}) => theme.small` max-width:${theme.widths.small}`}
`
const Header = styled.div`
    display:flex;
    align-items: center;
    width:100%;
    justify-content: space-between;
`
const Title = styled.div`
    color:#fff;
    font-size:34px;
    font-weight:700;
    line-height:1.3;
    ${({theme}) => theme.medium` font-size:24px`}
`
const MoreContentButton = styled.button`
    color:#f1f1f1;
    border: 1px solid rgba(255,255,255,0.2);
    padding:0 15px;
    font-size:14px;
    height:36px;
    border-radius: 18px;
    background:none;
    white-space: nowrap;
    cursor:pointer;
    &:hover{
        background-color:rgba(255,255,255,0.2);
        border-color: transparent;
    }
`
const ItemWrapper = styled.div`
    overflow-x:auto;
    margin:0 auto;
    padding:16px 0 24px;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium` max-width:100%`}
`

interface ContentWrapperProps{
    children:React.ReactNode;
    title:string;
}
export default function ContentWrapper({children,title}:ContentWrapperProps){
    const scrollRef = useRef<HTMLDivElement>(null);
    return(
        <Wrapper>
            <HeaderWrapper>
                <Header>
                    <Title>{title}</Title>
                    <MoreContentButton>더보기</MoreContentButton>
                </Header>
                <HeaderScrollButton scrollRef={scrollRef.current}/>
            </HeaderWrapper>
            <ItemWrapper ref={scrollRef}>
                {children}
            </ItemWrapper>
        </Wrapper>
    )
}