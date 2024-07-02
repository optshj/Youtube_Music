import styled from "styled-components";

import SmallSideBar from "./components/SmallSideBar";
import LargeSideBar from "./components/LargeSideBar";

const Wrapper = styled.div`
    position:fixed;
    height:100%;
    z-index:1;
`

export default function SideBar(){
    return(
        <Wrapper>
            <LargeSideBar/>
            <SmallSideBar/>
        </Wrapper>
    )
}