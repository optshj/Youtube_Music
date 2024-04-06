import styled from "styled-components";

import MakeNewPlayList from "./MakeNewPlayList";
import PlayList from "./PlayList";

const MaekForm = styled.div`
    padding:0 16px;
`
const Wrapper = styled.div`
    flex-direction:column;
    padding:0 4px;
`
const PlayListsForm = styled.div`
    padding:0 4px;
`

function PlayListMenu(){
    return(
        <Wrapper>
            <MaekForm>
                <MakeNewPlayList></MakeNewPlayList>
            </MaekForm>

            <PlayListsForm>
                <PlayList listName={"My PlayList"} ownerName={"이성빈"}></PlayList>
            </PlayListsForm>
        </Wrapper>
    )
}
export default PlayListMenu;