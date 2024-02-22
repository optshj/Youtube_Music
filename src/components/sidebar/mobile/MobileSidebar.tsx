import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";

const SidebarForm = styled.div`
    width:72px;
    position:fixed;
    border-right:1px solid rgba(255,255,255,.15);
    height:100%;
    @media (min-width:937px) or (max-width:616px){
        visibility:hidden;
    }
`
function MobileSidebar(){
    return(
        <>
            <SidebarForm>
                <Menu></Menu>
            </SidebarForm>
        </>
    )
}
export default MobileSidebar;