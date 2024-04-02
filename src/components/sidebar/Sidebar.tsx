import styled from "styled-components";

import MobileSidebar from "./mobile/MobileSidebar";
import WebSidebar from "./web/WebSidebar";

interface SidebarProps {
    isScrollTop:boolean;
}
const Wrapper = styled.div`
    margin-top:66px;
    position:fixed;
    top:0;
    left:0;
    z-index:2;
    height:100%;
`
function Sidebar({isScrollTop}:SidebarProps){
    return(
        <>  
            <Wrapper>
                <WebSidebar></WebSidebar>
                <MobileSidebar isScrollTop={isScrollTop}></MobileSidebar>
            </Wrapper>
        </>
    )

}
export default Sidebar;