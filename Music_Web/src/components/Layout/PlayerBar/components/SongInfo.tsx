import styled from "styled-components";

import CenterButton from "./CenterButton";
import { SongType } from "../../../../types/APItypes";

const ContentInfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 8px 0 16px;
`
const Title = styled.div`
    color:#fff;
    font-size:14px;
`
const ExplainWrapper = styled.div`
    display:flex;
    flex-direction:row;
    white-space: nowrap;
`
const Explain = styled.span`
    font-size:14px;
    color:rgba(255,255,255,0.7);
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
`
const Dot = styled.span`
    font-size:14px;
    color:rgba(255,255,255,0.7);    
    margin: 0 4px;
`

export default function SongInfo({songData}:{songData:SongType}){
    return(
        <>
            <img src="https://via.placeholder.com/40x40/666.png" alt="Placeholder"/>
            <ContentInfoWrapper>
                <Title>{songData.title}</Title>
                <ExplainWrapper>
                    <Explain>{songData.artist}</Explain>
                    <Dot>•</Dot>
                    <Explain>{songData.album}</Explain>
                    <Dot>•</Dot>
                    <Explain>{songData.releaseDate}</Explain>
                </ExplainWrapper>
            </ContentInfoWrapper>
            
            <CenterButton/>
        </>
    )
}