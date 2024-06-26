import styled from "styled-components";
import MusicListHeader from "./MusicListHeader";
import Item from "./MusicListItem";

const Wrapper = styled.div`
    overflow-x:hidden;
    overflow-y:scroll;
    flex:1;
    padding:0 16px;
`
const ListWrapper = styled.div`
    width:100%;
`

export default function MusicListNextTrack(){
    const ItemArray = Array.from({ length:20},(_,index) =>(
        <div key={index}>
            <Item></Item>
        </div>
    ));
    
    return(
        <Wrapper>
            <MusicListHeader/>
            <ListWrapper>{ItemArray}</ListWrapper>
        </Wrapper>
    )
}