import { useState,useEffect } from "react";
import { throttle } from "lodash";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import MakePlayListModal from "./playlist_modal/MakePlayListModal";
import PlayerBar from "./player_bar/PlayerBar";

function Content() {
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
            <Header isScrollTop={isScrollTop}></Header>
			<Sidebar isScrollTop={isScrollTop}></Sidebar>
			<Main></Main>
			<MakePlayListModal></MakePlayListModal>
			<PlayerBar></PlayerBar>
        </>
    )
}
export default Content;