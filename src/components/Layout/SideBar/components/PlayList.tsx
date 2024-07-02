import styled from "styled-components";

import { IoPlayCircleSharp } from "react-icons/io5";

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    height:48px;
    padding:4px 16px;
    border-radius:8px;
    cursor:pointer;
    align-items:center;
    &:hover{
        background-color:#343434;
    }
`
const InformationWrapper = styled.div`
    width:100%;
`
const PlayListName = styled.div`
    font-size:14px;
    font-weight:500;
    color:white;
`
const PlayListOwnerName = styled.div`
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
    listName:String,
    ownerName:String
}
export default function PlayList({listName,ownerName}:PlayListProps){
    return(
        <Wrapper>
            <InformationWrapper>
                <PlayListName>{listName}</PlayListName>
                <PlayListOwnerName>{ownerName}</PlayListOwnerName>
            </InformationWrapper>
            <PlayIcon/>
        </Wrapper>
    )
}