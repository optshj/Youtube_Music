import styled from "styled-components";

import MakeNewPlayList from "./LargeMakeNewPlayList";
import PlayList from "./LargePlayList";

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

export default function LargePlayListMenu(){
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