import styled from "styled-components";

import SmallSidebar from "./Small/SmallSidebar";
import LargeSidebar from "./Large/LargeSidebar";

const Wrapper = styled.div`
    position:fixed;
    height:100%;
    z-index:1;
    padding-top:66px;
`

interface SidebarProps {
    isScrollTop:boolean;
}
function Sidebar({isScrollTop}:SidebarProps){

    return(
        <Wrapper>
            <LargeSidebar></LargeSidebar>
            <SmallSidebar isScrollTop={isScrollTop}></SmallSidebar>
        </Wrapper>
    )

}
export default Sidebar;