import styled from "styled-components";

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
    return(
        <Wrapper>
            <LargeMakeList/>

            <ListWrapper>
                <PlayList listName={"My PlayList"} ownerName={"이성빈"}/>
            </ListWrapper>
        </Wrapper>
    )
}