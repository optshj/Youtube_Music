import styled from "styled-components";

import CenterButton from "./CenterButton";

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
const Explain = styled.div`
    font-size:14px;
    color:rgba(255,255,255,0.7);
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
`
const Dot = styled.div`
    font-size:14px;
    color:rgba(255,255,255,0.7);    
`

export default function SongInfo(){
    return(
        <>
            <img src="https://via.placeholder.com/40x40/666.png" alt="Placeholder"/>
            <ContentInfoWrapper>
                <Title>Lorem ipsum</Title>
                <ExplainWrapper>
                    <Explain>Lorem ipsum</Explain>
                    <Dot>&nbsp;•&nbsp;</Dot>
                    <Explain>Lorem</Explain>
                    <Dot>&nbsp;•&nbsp;</Dot>
                    <Dot>NaN</Dot>
                </ExplainWrapper>
            </ContentInfoWrapper>
            
            <CenterButton/>
        </>
    )
}