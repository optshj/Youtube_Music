import React from "react";
import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

import { GenreType } from "../../../types/APItypes";

const Wrapper = styled.ul`
    padding:0;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(4,min-content);
    gap:16px;
    &:nth-child(-n+1):nth-child(-n+4){
        padding-left: 56px;
    }
`
const ItemWrapper = styled.button<{color:string}>`
    width:calc(( min(calc(100vw - 200px - 240px - 12px ),1478px) - 4* 24px )/5);
    height:48px;
    border:none;
    border-left:6px solid ${props=>props.color};
    border-radius: 4px;
    font-size:14px;
    display:flex;
    padding:0 12px;
    color:#fff;
    align-items:center;
    justify-content:flex-start;
    font-weight:500;
    background-color: rgba(255,255,255,.15);
    cursor:pointer;
    ${({theme}) => theme.large` width:160px`}
`

const Item = React.memo(({title,color}:GenreType) => {
    return(
        <ItemWrapper color={color}>
            {title}
        </ItemWrapper>
    )
})
export default function Genre({data}:{data:GenreType[]}){
    return(
        <ContentWrapper title="분위기 및 장르">
            <Wrapper>
                {data.map((genre) => (
                    <Item key={genre.title} title={genre.title} color={genre.color}/>
                ))}
            </Wrapper>
        </ContentWrapper>
    )
}