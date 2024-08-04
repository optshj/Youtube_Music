import styled from "styled-components"

import { MdPlayArrow } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { usePlayList } from "../../../context/PlayListContext"

import { PlayListType } from "../../../types/APItypes"

const Wrapper = styled.div`
    display: grid;
    margin:0 auto;
    max-width:${({theme}) => theme.widths.xlarge};  
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium` max-width:${theme.widths.medium}`}
    ${({theme}) => theme.small` max-width:${theme.widths.small}`}
    grid-template-columns: repeat(5,1fr);
    grid-gap:40px 16px;
    ${({theme}) => theme.medium`grid-template-columns: repeat(4,1fr);`}
    ${({theme}) => theme.small`grid-template-columns: repeat(3,1fr);`}
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
const ItemWrapper = styled.div`
    width:clamp(90px, 15vw, 200px);
    ${({theme}) => theme.small`
        width:clamp(80px, 25vw, 200px);
    `}
`
const ItemBackGround = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0;
`
const ImageWrapper = styled.div`
    padding-top:100%;
    position:relative;
    cursor:pointer;
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
const Img = styled.img`
    width: 100%;
    height: auto;
    &:hover{
        background: linear-gradient(rgba(0, 0, 0, 0.502), rgba(0, 0, 0, 0.000), rgba(0, 0, 0, 0.000));
    }
`
const Detail = styled.div`
    margin-top:8px;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    margin-top:8px;
    font-size:14px;
    font-weight: 500;
    line-height: 1.3;
    color:#fff;
`
const SubTitleWrapper = styled.div`
    display:flex;
    align-items: center;
`
const SubTitle = styled.div`
    margin-top:3px;
    font-size:14px;
    color:#aaa;
    white-space: nowrap;
`
const Owner = styled(SubTitle)`
    &:hover{
        text-decoration: underline;
    }
`

const Item = ({playList}:{playList:PlayListType}) => {
    return(
        <ItemWrapper>
            <ImageWrapper>
                <Img src="https://via.placeholder.com/200x200/666.png" alt="AlbumImage"/>
                <ItemBackGround/>
                <PlayButton/>
                <MeunButton/>
            </ImageWrapper>
            <Detail>
                <Title>{playList.title}</Title>
                <SubTitleWrapper>
                    <SubTitle>재생목록 • </SubTitle>
                    <Owner> {playList.owner}</Owner>
                </SubTitleWrapper>
            </Detail>
        </ItemWrapper>
    )
}
export default function Content(){
    const { playList } = usePlayList();
    return(
        <Wrapper>
            {playList.map((item,idx) => (
                <Item key={idx} playList={item}/>
            ))}
        </Wrapper>
    )
}