import React from "react";
import styled from "styled-components";


import MakeNewPlayList from "./MakeNewPlayList";
import PlayList from "./PlayList";


const MaekForm = styled.div`
    padding:0 16px;
`
const PlayListMenuForm = styled.div`
    flex-direction:column;
    padding:0 4px;
`
const PlayListsForm = styled.div`
    padding:0 4px;
`

function PlayListMenu(){

    return(
        <>
            <PlayListMenuForm>
                <MaekForm>
                    <MakeNewPlayList></MakeNewPlayList>
                </MaekForm>

                <PlayListsForm>
                    <PlayList listName={"My PlayList"} ownerName={"이성빈"}></PlayList>
                </PlayListsForm>
            </PlayListMenuForm>
        </>
    )
}

export default PlayListMenu;