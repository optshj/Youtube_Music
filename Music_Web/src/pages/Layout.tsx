import styled from "styled-components";

import { useToggle } from "../context/ToggleContext";

import Header from "../components/Layout/Header/Header";
import PlayerPage from "../components/Layout/PlayerPage/PlayerPage";
import Playerbar from "../components/Layout/PlayerBar/PlayerBar";
import SideBar from "../components/Layout/SideBar/SideBar";
import PlayLisModal from "../components/Layout/PlayListModal/PlayListModal";

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
export default function Layout({children}: {children: React.ReactNode}) {
    const isSideBarOpen = useToggle().isComponentsOpen(SideBar);

    return(
        <>
            <Header/>
            <SideBar/>
            <Wrapper $isOpen={isSideBarOpen}>
                {children}
            </Wrapper>
            <PlayerPage/>
            <Playerbar/>
            <PlayLisModal/>
        </>
    )
}