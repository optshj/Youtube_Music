import MobileSidebar from "./mobile/MobileSidebar";
import WebSidebar from "./web/WebSidebar";

interface SidebarProps {
    isScrollTop:boolean;
}

function Sidebar({isScrollTop}:SidebarProps){
    return(
        <>  
            <WebSidebar></WebSidebar>
            <MobileSidebar isScrollTop={isScrollTop}></MobileSidebar>
        </>
    )

}
export default Sidebar;