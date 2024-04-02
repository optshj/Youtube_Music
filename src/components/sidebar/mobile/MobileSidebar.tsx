import React,{useState,useEffect} from "react";
import styled from "styled-components";

import { IsWebSidebarOpen } from "../../context/SidebarContext";

import Menu from "./menu/Menu";
import { throttle } from "lodash";

const Wrapper = styled.div<{isOpen:boolean,isScrollTop:boolean}>`
    margin-top:64px;
    width:72px;
    position:fixed;
    height:100%;
    border-right:${(props)=> (props.isScrollTop?'0px solid transparent':'1px solid rgba(255,255,255,.15)')};
    transitio:all 0.2s linear;
    @media (min-width:936px){
        display:none;   
    }
    @media (max-width:616px){
        display:none;
    }
`
function MobileSidebar(){
    const isOpen = IsWebSidebarOpen();
    const [isScrollTop,setIsScrollTop] = useState(true);

	const ScrollMove = throttle (() =>{
		const isScrollTop = window.scrollY === 0;
		setIsScrollTop(isScrollTop);
	},500)

	useEffect(()=> {
		window.addEventListener('scroll',ScrollMove);

		return () => window.removeEventListener('scroll',ScrollMove);
	},[ScrollMove])
    return(
        <>
            <Wrapper isOpen={isOpen} isScrollTop={isScrollTop}>
                <Menu></Menu>
            </Wrapper>
        </>
    )
}
export default MobileSidebar;