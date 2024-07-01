import Header from "../components/Main/Header/Header";
import Sidebar from "../components/Main/SideBar/SideBar";
import Main from "../components/Main/Main/Main";
import PlayListModal from "../components/Main/PlayListModal/PlayListModal";
import PlayerBar from "../components/Main/PlayerBar/PlayerBar";

export default function Content() {
    return(
        <>
            <Header></Header>
			<Sidebar></Sidebar>
			<Main></Main>
			<PlayListModal></PlayListModal>
			<PlayerBar></PlayerBar>
        </>
    )
}