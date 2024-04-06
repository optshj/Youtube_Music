import styled from "styled-components";

import { IoPlayCircleSharp } from "react-icons/io5";

interface PlayListProps {
    listName:String,
    ownerName:String
}

const Wrapper = styled.div`
    padding:4px 16px;
    border-radius:8px;
    cursor:pointer;
    display:flex;
    flex-direction:row;
    height:48px;
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
    color:white;
    font-weight:500;
`
const PlayListOwnerName = styled.div`
    display:flex;
    font-size:12px;
    align-itmes:center;
    color:#b4b4b4;
`
const PlayIcon = styled.div`
    color:white;
    display:none;
    ${Wrapper}:hover &{
        display:inline-block;
    }
`

function PlayList({listName,ownerName}:PlayListProps){
    return(
        <Wrapper>
            <ListInformation>
                <PlayListName>
                    {listName}
                </PlayListName>

                <PlayListOwnerName>
                    {ownerName}
                </PlayListOwnerName>
            </ListInformation>

            <PlayIcon>
                <IoPlayCircleSharp size={28}/>
            </PlayIcon>
        </Wrapper>
    )
}
export default PlayList;