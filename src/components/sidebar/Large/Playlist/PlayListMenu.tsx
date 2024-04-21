import styled from "styled-components";

import MakeNewPlayList from "./MakeNewPlayList";
import PlayList from "./PlayList";

const MakeForm = styled.div`
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
            <MakeForm>
                <MakeNewPlayList/>
            </MakeForm>

            <PlayListsForm>
                <PlayList listName={"My PlayList"} ownerName={"이성빈"}/>
            </PlayListsForm>
        </Wrapper>
    )
}
export default PlayListMenu;