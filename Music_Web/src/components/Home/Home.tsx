import styled from "styled-components";

import { IsLargeSideBarOpen } from "../../context/SideBarContext";

import Header from "./components/Header";
import Content from "./components/Content";

const Wrapper = styled.div<{$isOpen:boolean}>`
    box-sizing:border-box;
    padding-top:64px;
    margin-left:${(props) => props.$isOpen ? '240px' : '72px'};
    padding-bottom:70px;
    ${({theme}) => theme.medium`
        margin-left:72px;
    `}
    ${({theme}) => theme.small`
        margin-left:0;
    `}
`

export default function Home(){
    const isOpen = IsLargeSideBarOpen();

    return(
        <Wrapper $isOpen={isOpen}>
            <Header/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
        </Wrapper>
    )
}