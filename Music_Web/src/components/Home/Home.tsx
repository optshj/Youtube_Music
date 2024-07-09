import styled from "styled-components";

import { IsLargeSideBarOpen } from "../../context/SideBarContext";

import HomeHeader from "./components/HomeHeader";
import Content from "./components/Content";

import musicList from "../../data/musicList.json";

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