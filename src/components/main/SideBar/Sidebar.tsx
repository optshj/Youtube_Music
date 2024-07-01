import { useState } from "react";
import styled from "styled-components";


import SmallSideBar from "./components/SmallSideBar";
import LargeSideBar from "./components/LargeSideBar";

const Wrapper = styled.div`
    position:fixed;
    height:100%;
    z-index:1;
`

export default function SideBar(){
    const [selectState,setSelectState] = useState(0); // 0 = 홈, 1 = 둘러보기, 2 = 보관함

    return(
        <Wrapper>
            <LargeSideBar selectState={selectState} setSelectState={setSelectState}/>
            <SmallSideBar selectState={selectState} setSelectState={setSelectState}/>
        </Wrapper>
    )

}