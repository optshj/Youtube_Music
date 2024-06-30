import { useState,useEffect } from "react";
import { throttle } from "lodash";

import Header from "../components/Main/Header/Header";
import Sidebar from "../components/Main/SideBar/Sidebar";
import Main from "../components/Main/Main/Main";
import PlayListModal from "../components/Main/PlayListModal/PlayListModal";
import PlayerBar from "../components/Main/PlayerBar/PlayerBar";

export default function Content() {
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
            <Header $isScrollTop={isScrollTop}></Header>
			<Sidebar $isScrollTop={isScrollTop}></Sidebar>
			<Main></Main>
			<PlayListModal></PlayListModal>
			<PlayerBar></PlayerBar>
        </>
    )
}