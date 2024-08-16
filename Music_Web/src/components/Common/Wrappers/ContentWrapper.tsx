import { useRef } from "react"
import styled from "styled-components"

import HeaderScrollButton from "../Buttons/HeaderScrollButton"

const Wrapper = styled.div`
    margin-bottom: 24px;
`
const HeaderWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin: 0 auto;
    padding: 32px 0 16px 0;
    padding-bottom: 0;
    justify-content: space-between;
    align-items: center;
    max-width: ${({ theme }) => theme.widths.xlarge};
    ${({ theme }) => theme.large` max-width:${theme.widths.large}`}
    ${({ theme }) => theme.medium` max-width:${theme.widths.medium}`}
    ${({ theme }) => theme.small` max-width:${theme.widths.small}`}
`
const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const Title = styled.div`
    color: #fff;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    ${({ theme }) => theme.medium` font-size:24px`}
`
const MoreContentButton = styled.button`
    color: #f1f1f1;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0 15px;
    font-size: 14px;
    height: 36px;
    border-radius: 18px;
    background: none;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: transparent;
    }
`
const ItemWrapper = styled.div`
    overflow-x: auto;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.widths.xlarge};
    ${({ theme }) => theme.large` max-width:${theme.widths.large}`};
    ${({ theme }) => theme.medium` max-width:${theme.widths.medium}`};
    ${({ theme }) => theme.small` max-width:100%`};
`
const FlexWrapper = styled.ul`
    padding: 0;
    margin: 16px 0 24px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    ${({ theme }) => theme.small`
        & > *:first-child { padding-left:16px;}
        & > *:last-child { padding-right:16px;}
    `}
`
const GridWrapper = styled.ul`
    padding: 0;
    margin: 16px 0 24px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, min-content);
    gap: 16px;
    ${({ theme }) => theme.small`
        &:nth-child(-n+1):nth-child(-n+4){ padding-left: 16px}
    `}
`

interface ContentWrapperProps {
    children: React.ReactNode
    title: string
    grid?: boolean
    moreButton?: boolean
}
/**
 * @param {string} title 제목
 * @param {boolean} grid ?그리드 레이아웃 여부
 * @param {boolean} moreButton ?더보기 버튼 여부
 */
export default function ContentWrapper({ children, title, grid, moreButton }: ContentWrapperProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    return (
        <Wrapper>
            <HeaderWrapper>
                <Header>
                    <Title>{title}</Title>
                    {moreButton && <MoreContentButton>{"더보기"}</MoreContentButton>}
                </Header>
                <HeaderScrollButton scrollRef={scrollRef} />
            </HeaderWrapper>
            <ItemWrapper ref={scrollRef}>
                {grid ? <GridWrapper>{children}</GridWrapper> : <FlexWrapper>{children}</FlexWrapper>}
            </ItemWrapper>
        </Wrapper>
    )
}
