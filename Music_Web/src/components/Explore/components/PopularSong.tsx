import React,{ReactElement} from "react";
import styled from "styled-components";

import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";
import { BsDot } from "react-icons/bs";

import { PopularSongType } from "../../../types/APItypes";

import popularSong from "../../../data/popularSong.json";

import ContentWrapper from "./ContentWrapper";

const ImageBackground = styled.div`
    position: absolute;
    width: 48px;
    height: 48px;
`
const ItemWrapper = styled.div`
    width:420px;
    display:flex;
    align-items: center;
    height:48px;
    padding:0 8px;
    &:hover {
        ${ImageBackground}{
            background: rgba(0,0,0,0.5);
        }
    }
`
const ImageWrapper = styled.div`
    position:relative;
    cursor:pointer;
`
const Fluctuation = styled.div`
    font-size:32px;
    display: flex;
    align-items: center;
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

type StatusConfig = {
    [key: string]: { icon: ReactElement; color: string };
};
const fluctuationIcon:StatusConfig = {
    "-1":{
        icon:<MdArrowDropDown/>,
        color:"#ff0000"
    },
    "0":{
        icon:<BsDot/>,
        color:"#aaa"
    },
    "1":{
        icon:<MdArrowDropUp/>,
        color:"#00ff0091",
    }
}
const Item = React.memo(({songData}:{songData:PopularSongType}) => {
    const { icon, color} = fluctuationIcon[songData.fluctuation];

    return(
        <ItemWrapper>
            <ImageWrapper>
                <ImageBackground/>
                <img src="https://via.placeholder.com/48x48/666.png" alt="Placeholder"/>
            </ImageWrapper>
                <Fluctuation style={{color:color}}>{icon}</Fluctuation>
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