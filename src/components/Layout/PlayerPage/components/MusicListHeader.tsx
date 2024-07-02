import styled from "styled-components";

import { RiPlayListAddLine } from "react-icons/ri";

const Wrapper = styled.div`
    display:flex;
    margin:16px 0;
    justify-content:space-between;
`
const ExplainWrapper = styled.div`
`
const Title = styled.div`
    font-size:12px;
    color:rgba(255,255,255,0.7);
    line-height:1.6;
    white-space: nowrap;
`
const SubTitle = styled.div`
    font-size:14px;
    color:#fff;
    line-height:1.3;
    font-weight:500;
    white-space: nowrap;
`
const StoreButton = styled.div`
    font-size:14px;
    display:flex;
    align-items:center;
    background-color:#fff;
    color:#030303;
    padding:4px 8px 4px 13px;
    border-radius:56px;
    cursor:pointer;
    &:hover{
        background-color:#d9d9d9;
    }
`
const ButtonFont = styled.div`
    margin:0 7px 0 8px;
`
const ButtonIcon = styled(RiPlayListAddLine)`
    width:24px;
    height:14px;
`

export default function MusicListHeader(){
    return(
        <Wrapper>
            <ExplainWrapper>
                <Title>재생 중인 트랙 출처</Title>
                <SubTitle>My PlayList</SubTitle>
            </ExplainWrapper>
            <StoreButton>
                <ButtonIcon></ButtonIcon>
                <ButtonFont>저장</ButtonFont>
            </StoreButton>
        </Wrapper>
    )
}