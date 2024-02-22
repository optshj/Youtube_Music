import React from "react";
import styled,{keyframes} from "styled-components";

import Menu from "./Menu/Menu";
import Bumper from "./Bumper";
import PlayListMenu from "./PlayList/PlayListMenu";

const hideSidebar = keyframes`
    from {
        transform:translate3d(0,0,0);
    }
    to{
        transform:translate3d(-100%,0,0);
    }
    `
    const SidebarForm = styled.div`
    width:240px;
    position:fixed;
    top:0;
    border-right:1px solid rgba(255,255,255,.15);
    height:100%;
    @media (max-width:936px){
        animation: ${hideSidebar} 0.2s linear forwards;
    }
`

function WebSidebar() {

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
export default WebSidebar;