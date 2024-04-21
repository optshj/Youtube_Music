import { useState } from "react";
import styled from "styled-components";

import SmallSidebar from "./Small/SmallSidebar";
import LargeSidebar from "./Large/LargeSidebar";

const Wrapper = styled.div`
    position:fixed;
    height:100%;
    z-index:1;
`

interface SidebarProps {
    $isScrollTop:boolean;
}
function Sidebar({$isScrollTop}:SidebarProps){
    const [selectState,setSelectState] = useState(0); // 0 = 홈, 1 = 둘러보기, 2 = 보관함

    return(
        <Wrapper>
            <LargeSidebar selectState={selectState} setSelectState={setSelectState}/>
            <SmallSidebar $isScrollTop={$isScrollTop} selectState={selectState} setSelectState={setSelectState}/>
        </Wrapper>
    )

}
export default Sidebar;