import { useEffect } from 'react';
import styled from "styled-components";

import { useToggle } from '../../../context/ToggleContext';
import { usePlayList } from '../../../context/PlayListContext';

import SmallSideBar from "./components/SmallSideBar";
import LargeSideBar from "./components/LargeSideBar";

const Wrapper = styled.div`
    position:fixed;
    height:100%;
    z-index:1;
`

export default function SideBar(){
    const { fetchPlayList } = usePlayList();
    const { openComponent, closeComponent } = useToggle();
    
    const handleResize = () => {
        if (window.innerWidth > 937) {
            openComponent(SideBar);
        } else {
            closeComponent(SideBar);
        }
    };

    useEffect(() => {
        fetchPlayList();
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);
    
    return(
        <Wrapper>
            <LargeSideBar/>
            <SmallSideBar/>
        </Wrapper>
    )
}