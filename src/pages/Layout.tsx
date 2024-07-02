import Header from "../components/Layout/Header/Header";
import Sidebar from "../components/Layout/SideBar/SideBar";
import PlayListModal from "../components/Layout/PlayListModal/PlayListModal";
import PlayerBar from "../components/Layout/PlayerBar/PlayerBar";
import PlayerPage from "../components/Layout/PlayerPage/PlayerPage";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <>
            <Header/>
			<Sidebar/>
            {children}
			<PlayListModal/>
			<PlayerBar/>
            <PlayerPage/>
        </>
    )
}