import React from "react";
import styled from "styled-components";

import { MdPlayArrow } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useToggle } from "../../../context/ToggleContext";
import { useSongData } from "../../../context/SongDataConetext";
import { VideoType } from "../../../types/APItypes";

import PlayerBar from "../../Layout/PlayerBar/PlayerBar";

const ItemWrapper = styled.div`
    width:320px;
    cursor:pointer;
    &:hover{
        img{
            opacity: 0.5;
        }
    }
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
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size:40px;
    color:#fff;
`
const ImageWrapper = styled.div`
    position:relative;
    top:0;
    &:hover {
        ${MeunButton}{visibility:visible}
    }
`

export default React.memo(function VideoItem({videoData}:{videoData:VideoType}){
    const { setSongData } = useSongData();
    const { openComponent,isComponentsOpen } = useToggle();

    const onClick = () => {
        setSongData(videoData);
        if (!isComponentsOpen(PlayerBar))
            openComponent(PlayerBar)
    }

    return(
        <ItemWrapper onClick={onClick}>
            <ImageWrapper>
                <img src="https://via.placeholder.com/320x180/666.png" alt="VideoImage"/>
                <PlayButton/>
                <MeunButton/>
            </ImageWrapper>
            <Details>
                <Title>{videoData.title}</Title>
                <SubTitle>{videoData.artist} • 조회수 {videoData.hit}만회</SubTitle>
            </Details>
        </ItemWrapper>
    )
})