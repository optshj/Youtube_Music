import styled from "styled-components";

import { usePlayList } from "../../../../context/PlayListContext";

import LargeMakeList from "./LargeMakeList";
import PlayList from "./PlayList";

const Wrapper = styled.div`
    flex-direction:column;
    padding:0 4px;
`
const ListWrapper = styled.div`
    padding:0 4px;
`
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