import styled from "styled-components";

import { usePlayList } from "../../../../context/PlayListContext";

import { IoPlayCircleSharp } from "react-icons/io5";
import LargeMakeList from "./LargeMakeList";

const PlayListWrapper = styled.div`
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
    font-size:32px;
    visibility: hidden;
    ${PlayListWrapper}:hover &{
        visibility: visible;
    }
`
const Wrapper = styled.div`
    flex-direction:column;
    padding:0 4px;
`
const ListWrapper = styled.div`
    padding:0 4px;
`

interface PlayListProps {
    title:String,
    owner:String
}
const PlayList = ({title,owner}:PlayListProps) => {
    return(
        <PlayListWrapper>
            <InformationWrapper>
                <ListTitle>{title}</ListTitle>
                <ListOwner>{owner}</ListOwner>
            </InformationWrapper>
            <PlayIcon/>
        </PlayListWrapper>
    )
}

export default function LargePlayListMenu(){
    const { playList } = usePlayList();

    return(
        <Wrapper>
            <LargeMakeList/>
            <ListWrapper>
                {playList.map((list)=>{
                    return <PlayList key={list._id} title={list.title} owner={list.owner}/>})}
            </ListWrapper>
        </Wrapper>
    )
}