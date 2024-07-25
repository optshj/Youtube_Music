import styled from "styled-components"
import { IconType } from "react-icons"

import { BsGraphUpArrow,BsEmojiSmile,BsMusicNoteBeamed } from "react-icons/bs";

const Wrapper = styled.div`
    margin:0 auto;
    margin-top:32px;
    margin-bottom:56px;
    display:flex;
    gap:24px;
    justify-content: space-between;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium` 
        max-width:${theme.widths.medium};
        flex-direction:column;
    `}
    ${({theme}) => theme.small` max-width:${theme.widths.small}`}
`
const ItemsWrapper = styled.button`
    display:flex;
    align-items: center;
    border-radius: 4px;
    width:100%;
    min-height:56px;
    font-size:18px;
    padding:8px 16px;
    border:none;
    white-space:normal;
    cursor:pointer;
    background-color:#292929;
    &:hover{
        background-color:#212121;
        transition: all 0.3s linear;
    }
`
const ItemIcon = styled.div`
    margin-right:12px;
    color:#aaa;
`
const Descript = styled.div`
    color:#fff;
    font-weight:700;
    line-height:1.3;
    white-space: nowrap;
    font-size:24px;
    ${({theme}) => theme.xlarge` font-size:20px`}
    ${({theme}) => theme.large` font-size:16px`}
    ${({theme}) => theme.medium` font-size:20px`}
`
interface ItemProps{
    Icon:IconType;
    descript:string;
}
const Item = ({Icon,descript}:ItemProps) => {
    return(
        <ItemsWrapper>
            <ItemIcon as={Icon}/>
            <Descript>{descript}</Descript>
        </ItemsWrapper>
    )
}
export default function ExploreHeader(){
    return(
        <Wrapper>
            <Item Icon={BsMusicNoteBeamed} descript="최신 음악"/>
            <Item Icon={BsGraphUpArrow} descript="차트"/>
            <Item Icon={BsEmojiSmile} descript="분위기 및 장르"/>
        </Wrapper>
    )
}