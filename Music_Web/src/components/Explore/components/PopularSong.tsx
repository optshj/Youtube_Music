import React from "react";
import styled from "styled-components";

import { PopularSongType } from "../../../types/APItypes";

import popularSong from "../../../data/popularSong.json";

import ContentWrapper from "./ContentWrapper";


const ItemWrapper = styled.div`
    width:420px;
    display:flex;
    align-items: center;
    height:56px;
    padding:0 8px;
`
const ItemBackGround = styled.div`
    position: absolute;
    width: 48px;
    height: 48px;
`
const ImageWrapper = styled.div`
    position:relative;
    &:hover {
        ${ItemWrapper}{
            background: rgba(0,0,0,0.5);
        }
    }
`
const Fluctuation = styled.div`
    width:24px;
`
const Rank = styled.div`
    color:#fff;
    margin-right:16px;
`
const Details = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:8px;
`
const Title = styled.div`
    color:#fff;
    font-size:14px;
    font-weight:500;
    line-height:1.3;
    &:hover{
        text-decoration:underline;
    }
`
const SubTitle = styled.div`
    color:rgba(255,255,255,0.7);
    font-size:14px;
    white-space:normal;
`

const Wrapper = styled.ul`
    padding:0;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(4,min-content);
    gap:16px;
`
const Item = React.memo(({songData}:{songData:PopularSongType}) => {
    return(
        <ItemWrapper>
            <ImageWrapper>
                <ItemBackGround/>
                <img src="https://via.placeholder.com/48x48/666.png" alt="Placeholder"/>
            </ImageWrapper>
            <Fluctuation></Fluctuation>
            <Rank>{songData.rank}</Rank>
            <Details>
                <Title>{songData.title}</Title>
                <SubTitle>{songData.artist} • {songData.album}</SubTitle>
            </Details>
        </ItemWrapper>
    )
})
export default function PopularSong() {
    const popularSongs = popularSong.songs;
    return(
        <ContentWrapper title={"인기곡"}>
            <Wrapper>
                {
                    popularSongs.map((data,idx) => <Item key={idx} songData={data}/>)
                }
            </Wrapper>
        </ContentWrapper>
    )
}