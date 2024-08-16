import React, { useState, ReactElement } from "react"
import styled from "styled-components"

import { AiFillDislike, AiOutlineDislike, AiFillLike, AiOutlineLike } from "react-icons/ai"
import { PiDotsThreeVertical } from "react-icons/pi"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { BsDot } from "react-icons/bs"

import { SongType } from "../../../types/APItypes"
import { useSongData } from "../../../context/SongDataConetext"
import { useToggle } from "../../../context/ToggleContext"

import PlayerBar from "../../Layout/PlayerBar/PlayerBar"

const ButtonWrapper = styled.div`
    display: none;
    gap: 8px;
    flex-basis: 0;
`
const Img = styled.img`
    border-radius: 2px;
    object-fit: cover;
`
const ItemWrapper = styled.div`
    width: 420px;
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 8px;
    &:hover {
        img {
            opacity: 0.5;
        }
        ${ButtonWrapper} {
            display: flex;
        }
    }
`
const Fluctuation = styled.div`
    font-size: 24px;
    width: 24px;
    height: 24px;
`
const Rank = styled.div`
    color: #fff;
    margin-right: 16px;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    overflow: hidden;
    flex: 1;
`
const Title = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
const SubTitle = styled.div`
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    &:active {
        background-color: rgba(255, 255, 255, 0.3);
    }
`
const Menu = styled(PiDotsThreeVertical)`
    color: #909090;
`

type StatusConfig = {
    [key: string]: { icon: ReactElement; color: string }
}
const fluctuationIcon: StatusConfig = {
    "-1": {
        icon: <MdArrowDropDown />,
        color: "#ff0000"
    },
    "0": {
        icon: <BsDot />,
        color: "#aaa"
    },
    "1": {
        icon: <MdArrowDropUp />,
        color: "#00ff0091"
    }
}
export default React.memo(function TransverseItem({ songData }: { songData: SongType }) {
    const { setSongData } = useSongData()
    const { openComponent, isComponentsOpen } = useToggle()

    const onClick = () => {
        setSongData(songData)
        if (!isComponentsOpen(PlayerBar)) openComponent(PlayerBar)
    }
    const [isDislike, setIsDislike] = useState(false)
    const [isLike, setIsLike] = useState(false)

    const { icon, color } =
        songData.fluctuation !== undefined ? fluctuationIcon[songData.fluctuation] : { icon: null, color: "" }

    return (
        <ItemWrapper onClick={onClick}>
            <Img src={"https://via.placeholder.com/48x48/666.png"} alt={"MusicImage"} loading={"eager"} />
            <Fluctuation style={{ color }}>{icon}</Fluctuation>
            <Rank>{songData.rank}</Rank>
            <Details>
                <Title>{songData.title}</Title>
                {songData.hit ? (
                    <SubTitle>{`${songData.artist} • 조회수 ${songData.hit}만회`}</SubTitle>
                ) : (
                    <SubTitle>{`${songData.artist} • ${songData.album}`}</SubTitle>
                )}
            </Details>
            <ButtonWrapper>
                <IconWrapper onClick={() => setIsDislike(!isDislike)}>
                    {isDislike ? <AiFillDislike /> : <AiOutlineDislike />}
                </IconWrapper>
                <IconWrapper onClick={() => setIsLike(!isLike)}>
                    {isLike ? <AiFillLike /> : <AiOutlineLike />}
                </IconWrapper>
                <IconWrapper>
                    <Menu />
                </IconWrapper>
            </ButtonWrapper>
        </ItemWrapper>
    )
})
