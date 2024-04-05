import styled from "styled-components";

import SmallSidebar from "./mobile/SmallSidebar";
import LargeSidebar from "./web/LargeSidebar";

interface SidebarProps {
    isScrollTop:boolean;
}
const Wrapper = styled.div`
    padding-top:66px;
    position:fixed;
    top:0;
    left:0;
    z-index:1;
    height:100%;
`   
function Sidebar({isScrollTop}:SidebarProps){
    return(
        <Wrapper>
            <LargeSidebar></LargeSidebar>
            <SmallSidebar isScrollTop={isScrollTop}></SmallSidebar>
        </Wrapper>
    )

}
export default Sidebar;