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
const ListInformation = styled.div`
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
    display:none;
    font-size:24px;
    ${Wrapper}:hover &{
        display:inline-block;
    }
`

interface PlayListProps {
    listName:String,
    ownerName:String
}
function PlayList({listName,ownerName}:PlayListProps){
    return(
        <Wrapper>
            <ListInformation>
                <PlayListName>{listName}</PlayListName>
                <PlayListOwnerName>{ownerName}</PlayListOwnerName>
            </ListInformation>
            <PlayIcon/>
        </Wrapper>
    )
}
export default PlayList;