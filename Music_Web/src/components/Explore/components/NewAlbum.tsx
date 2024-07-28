import React from "react";
import styled from "styled-components";

import { MdPlayArrow } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { NewAlbumType } from "../../../types/APItypes";

import { useSongData } from "../../../context/SongDataConetext";
import { useToggle } from "../../../context/ToggleContext";

import ContentWrapper from "./ContentWrapper";
import PlayerBar from "../../Layout/PlayerBar/PlayerBar";

const ItemWrapper = styled.div`
    width:160px;
    cursor:pointer;
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
    margin-top:3px;
`
const MeunButton = styled(HiOutlineDotsVertical)`
    position:absolute;
    visibility:hidden;
    border-radius:50%;
    width:20px;
    height:20px;
    padding:10px;
    top:8px;
    right:4px;
    color:#fff;
    &:hover{
        background-color:rgba(255,255,255,0.2);
    }
`
const PlayButton = styled(MdPlayArrow)`
    position:absolute;
    visibility:hidden;
    right:20px;
    bottom:20px;
    width:32px;
    height:32px;
    background-color:#090909;
    opacity:0.7;
    border-radius:50%;
    font-size:32px;
    color:#fff;
    &:hover{
        transform:scale(1.3);
        opacity:1;
        transition:all 0.2s linear;
    }
`
const ItemBackGround = styled.div`
    position: absolute;
    width: 160px;
    height: 160px;
`
const ImageWrapper = styled.div`
    position:relative;
    top:0;
    &:hover {
        ${PlayButton}{
            visibility:visible;
        }
        ${MeunButton}{
            visibility:visible;
        }
        ${ItemBackGround}{
            background: linear-gradient(rgba(0, 0, 0, 0.502), rgba(0, 0, 0, 0.000), rgba(0, 0, 0, 0.000));
        }
    }
`
const Wrapper = styled.ul`
    padding:0;
    display:flex;
    flex-direction:row;
    gap:16px;
    ${({theme}) => theme.medium`
        & > *:first-child { padding-left:56px;}
        & > *:last-child { padding-right:56px;}
    `}
    ${({theme}) => theme.small`
        & > *:first-child { padding-left:16px;}
        & > *:last-child { padding-right:16px;}
    `}
`
const Item = React.memo(({albumData}:{albumData:NewAlbumType}) => {
    const { setSongData } = useSongData();
    const { openComponent,isComponentsOpen } = useToggle();

    const onClick = () => {
        setSongData(albumData);
        if (!isComponentsOpen(PlayerBar))
            openComponent(PlayerBar)
    }

    return(
        <ItemWrapper onClick={onClick}>
            <ImageWrapper>
                <ItemBackGround/>
                <img src="https://via.placeholder.com/160x160/666.png" alt="Placeholder"/>
                <PlayButton/>
                <MeunButton/>
            </ImageWrapper>
            <Details>
                <Title>{albumData.title}</Title>
                <SubTitle>{albumData.type} • {albumData.artist}</SubTitle>
            </Details>
        </ItemWrapper>
    )
})
export default function NewAlbum({data}:{data:NewAlbumType[]}) {
    return(
        <ContentWrapper title="새 앨범 및 싱글">
            <Wrapper>
                {
                    data.map((album,idx) => <Item key={idx} albumData={album}/>)
                }
            </Wrapper>
        </ContentWrapper>
    )
}