import React from "react";
import styled from "styled-components";
import Menu from "./menu/Menu";

const SidebarForm = styled.div`
    width:72px;
    position:fixed;
    height:100%;
    @media (min-width:937px) or (max-width:616px){
        display:none;
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