import { useState,useEffect } from "react";
import { throttle } from "lodash";

import Header from "./Header/Header";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main/Main";
import MakePlayListModal from "./PlayListModal/MakePlayListModal";
import PlayerBar from "./PlayerBar/PlayerBar";

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