import React from "react"
import styled from "styled-components"

import ContentWrapper from "../../Common/Wrappers/ContentWrapper"

import { GenreType } from "../../../types/APItypes"

const ItemWrapper = styled.button<{ color: string }>`
    width: calc((min(calc(100vw - 200px - 240px - 12px), 1478px) - 4 * 24px) / 5);
    height: 48px;
    border: none;
    border-left: 6px solid ${props => props.color};
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    padding: 0 12px;
    color: #fff;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 0.15);
    cursor: pointer;
    ${({ theme }) => theme.large` width:160px`}
`

const Item = React.memo(({ title, color }: GenreType) => {
    return <ItemWrapper color={color}>{title}</ItemWrapper>
})
export default function Genre({ data }: { data: GenreType[] }) {
    return (
        <ContentWrapper title={"분위기 및 장르"} grid moreButton>
            {data.map(genre => (
                <Item title={genre.title} color={genre.color} />
            ))}
        </ContentWrapper>
    )
}
