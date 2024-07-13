import Header from "../components/Layout/Header/Header";
import PlayerPage from "../components/Layout/PlayerPage/PlayerPage";
import Playerbar from "../components/Layout/PlayerBar/PlayerBar";
import Sidebar from "../components/Layout/SideBar/SideBar";
import PlayLisModal from "../components/Layout/PlayListModal/PlayListModal";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <>
            <Header/>
            <Sidebar/>
            {children}
            <PlayerPage/>
            <Playerbar/>
            <PlayLisModal/>
        </>
    )
}