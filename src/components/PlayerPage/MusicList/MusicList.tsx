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
    return(
        <Wrapper>
            <MusicListHeader></MusicListHeader>
            <ListWrapper>
                <Item></Item>
            </ListWrapper>
        </Wrapper>
    )
}
export default MusicList;