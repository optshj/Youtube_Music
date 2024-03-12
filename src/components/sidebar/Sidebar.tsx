import React from "react";
import styled from "styled-components";

import { IsWebSidebarOpen } from "../context/SidebarContext";

import MobileSidebar from "./mobile/MobileSidebar";
import WebSidebar from "./web/WebSidebar";

function Sidebar(){
    const isOpen = IsWebSidebarOpen();
    console.log(isOpen);
    return(
        <>  
            {
                isOpen &&
                <WebSidebar></WebSidebar>
            }
            {
                !isOpen &&
                <MobileSidebar></MobileSidebar>
            }
        </>
    )

}
export default Sidebar;