import styled from "styled-components";
import MusicListHeader from "./MusicListHeader";
import Item from "./Item";

const Wrapper = styled.div`
    overflow-x:hidden;
    overflow-y:scroll;
`
const ListWrapper = styled.div`
    width:100%;
`
function MusicList(){
    const ItemArray = Array.from({ length:20},(_,index) =>(
        <div key={index}>
            <Item></Item>
        </div>
    ));
    return(
        <Wrapper>
            <MusicListHeader></MusicListHeader>
            <ListWrapper>
                {ItemArray}
            </ListWrapper>
        </Wrapper>
    )
}
export default MusicList;