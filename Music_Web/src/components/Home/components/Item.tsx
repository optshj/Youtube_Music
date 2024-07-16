import React from "react";
import styled from "styled-components";

import { MdPlayArrow } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useSongData } from "../../../context/SongDataConetext";
import { SongType } from "../../../types/APItypes";
import { useToggle } from "../../../context/ToggleContext";
import PlayerBar from "../../Layout/PlayerBar/PlayerBar";

const Wrapper = styled.div`
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
    cursor:pointer;
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
const ItemMenuWrapper = styled.div`
    position:absolute;
    border-radius:50%;
    width:40px;
    height:40px;
    top:8px;
    right:4px;
    &:hover{
        background-color:rgba(255,255,255,0.2);
    }
`
const ItemBackGround = styled.div`
    position: absolute;
    width: 160px;
    height: 160px;
`
const ItemPlayButtonWrapper = styled.div`
    position:absolute;
    visibility:hidden;
    right:20px;
    bottom:20px;
    width:32px;
    height:32px;
    background-color:#090909;
    opacity:0.7;
    border-radius:50%;
    &:hover{
        transform:scale(1.3);
        transition:transform 0.2s linear;
        opacity:1;
    }
`
const ItemPlayButton = styled(MdPlayArrow)`
    font-size:32px;
    color:#fff;
`
const ItemMenuButton = styled(HiOutlineDotsVertical)`
    visibility:hidden;
    transform:translate(50%,50%);
    font-size:20px;
    color:#fff;
`
const ImageWrapper = styled.div`
    position:relative;
    top:0;
    &:hover {
        ${ItemPlayButtonWrapper}{
            visibility:visible;
        }
        ${ItemMenuButton}{
            visibility:visible;
        }
        ${ItemBackGround}{
            background: linear-gradient(rgba(0, 0, 0, 0.502), rgba(0, 0, 0, 0.000), rgba(0, 0, 0, 0.000));
        }
    }
`

export default React.memo(function Item({songData}:{songData:SongType}) {
    const { setSongData } = useSongData();
    const { openComponent,isComponentsOpen } = useToggle();

    const onClick = () => {
        setSongData(songData);
        if (!isComponentsOpen(PlayerBar))
            openComponent(PlayerBar)
    }

    return(
        <Wrapper onClick={onClick}>
            <ImageWrapper>
                <ItemBackGround/>
                <img src="https://via.placeholder.com/160x160/666.png" alt="Placeholder"/>
                <ItemPlayButtonWrapper>
                    <ItemPlayButton/>
                </ItemPlayButtonWrapper>
                <ItemMenuWrapper>
                    <ItemMenuButton/>
                </ItemMenuWrapper>
            </ImageWrapper>

            <Details>
                <Title>{songData.title}</Title>
                <SubTitle>{songData.artist}</SubTitle>
            </Details>
        </Wrapper>
    )
})