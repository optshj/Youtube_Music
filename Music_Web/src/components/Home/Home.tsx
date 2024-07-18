import styled from "styled-components";

import { useToggle } from "../../context/ToggleContext";

import HomeHeader from "./components/HomeHeader";
import Content from "./components/Content";
import SideBar from "../Layout/SideBar/SideBar";

import musicList from "../../data/musicList.json";

const Wrapper = styled.div<{$isOpen:boolean}>`
    box-sizing:border-box;
    padding-top:64px;
    margin-left:${props => props.$isOpen ? '240px' : '72px'};
    padding-bottom:70px;
    ${({theme}) => theme.medium`
        margin-left:72px;
    `}
    ${({theme}) => theme.small`
        margin-left:0;
    `}
`

export default function Home(){
    const isSideBarOpen = useToggle().isComponentsOpen(SideBar);

    return(
        <Wrapper $isOpen={isSideBarOpen}>
            <HomeHeader/>
            {
                musicList.datas.map((musicListData,index) => {
                    return(
                        <Content key={index} musicListData={musicListData}/>
                    )
                })
            }
        </Wrapper>
    )
}