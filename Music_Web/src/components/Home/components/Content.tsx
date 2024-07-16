import { useRef } from "react";
import styled from "styled-components";

import ContentButton from "./ContentButton";
import Item from "./Item";

import { SongType } from "../../../types/APItypes";

const Wrapper = styled.div`
    margin-bottom:24px;
`
const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin:0 auto;
    gap:24px;
    padding:16px 0 0 0;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium` max-width:${theme.widths.medium}`}
    ${({theme}) => theme.small` max-width:${theme.widths.small}`}
`
const HeaderTitle = styled.h2`
    width:100%;
    color:#fff;
    font-size:28px;
    overflow: visible;
    margin:0;
    ${({theme}) => theme.large`
        font-size:24px;
    `}
`
const ItemsWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    gap:16px;
    overflow-x:auto;
    margin:0 auto;
    padding:16px 0 24px;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium`
        max-width:100%;
        & > *:first-child { padding-left:56px;}
        & > *:last-child { padding-right:56px;}
    `}
    ${({theme}) => theme.small`
        & > *:first-child { padding-left:16px;}
        & > *:last-child { padding-right:16px;}
    `}
`

interface ContentProps {
    listTitle: string;
    songs: SongType[];
}
export default function Content({musicListData}:{musicListData:ContentProps}) {
    const componentRef = useRef<HTMLUListElement>(null);

    return(
        <Wrapper>
            <HeaderWrapper>
                <HeaderTitle>{musicListData.listTitle}</HeaderTitle>
                <ContentButton scrollRef={componentRef.current}/>
            </HeaderWrapper>

            <ItemsWrapper ref={componentRef}>
                {
                    musicListData.songs.map((item,index) => (
                        <Item key={index} songData={item}/>
                    ))
                }
            </ItemsWrapper>
        </Wrapper>
    )
}