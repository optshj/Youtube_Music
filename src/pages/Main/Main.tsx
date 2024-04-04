import { useState,useEffect } from "react";
import { throttle } from "lodash";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import MakePlayListModal from "../../components/PlayListModal/MakePlayListModal";
import PlayerBar from "../../components/PlayerBar/PlayerBar";

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