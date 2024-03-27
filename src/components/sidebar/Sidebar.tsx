import React from "react";

import MobileSidebar from "./mobile/MobileSidebar";
import WebSidebar from "./web/WebSidebar";

function Sidebar(){
    return(
        <>  
            <WebSidebar></WebSidebar>
            <MobileSidebar></MobileSidebar>
        </>
    )

}
export default Sidebar;