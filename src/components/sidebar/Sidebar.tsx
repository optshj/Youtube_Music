import React from "react";

import { IsWebSidebarOpen } from "../context/SidebarContext";

import MobileSidebar from "./mobile/MobileSidebar";
import WebSidebar from "./web/WebSidebar";

function Sidebar(){
    const isOpen = IsWebSidebarOpen();
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