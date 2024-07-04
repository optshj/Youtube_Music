import styled from "styled-components";

import { IoPlayCircleSharp } from "react-icons/io5";

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    height:48px;
    padding:4px 16px;
    border-radius:8px;
    cursor:pointer;
    margin:16px 0;
    align-items:center;
    &:hover{
        background-color:#343434;
    }
`
const InformationWrapper = styled.div`
    width:100%;
`
const ListTitle = styled.div`
    font-size:14px;
    font-weight:500;
    color:white;
`
const ListOwner = styled.div`
    font-size:12px;
    color:#b4b4b4;
`
const PlayIcon = styled(IoPlayCircleSharp)`
    color:#fff;
    font-size:24px;
    visibility: hidden;
    ${Wrapper}:hover &{
        visibility: visible;
    }
`

interface PlayListProps {
    title:String,
    owner:String
}
export default function PlayList({title,owner}:PlayListProps){
    return(
        <Wrapper>
            <InformationWrapper>
                <ListTitle>{title}</ListTitle>
                <ListOwner>{owner}</ListOwner>
            </InformationWrapper>
            <PlayIcon/>
        </Wrapper>
    )
}