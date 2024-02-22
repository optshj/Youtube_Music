import React from "react";
import styled from "styled-components";

import Menu from "./Menu/Menu";
import Bumper from "./Bumper";
import PlayListMenu from "./PlayList/PlayListMenu";

const SidebarForm = styled.div`
    width:240px;
    position:fixed;
    top:0;
    border-right:1px solid rgba(255,255,255,.15);
    height:100%;
`

function Sidebar() {

    return(
        <> 
            <SidebarForm>
                <Bumper></Bumper>
                <Menu></Menu>
                <PlayListMenu></PlayListMenu>
            </SidebarForm>
        </>
    )
}
export default Sidebar;