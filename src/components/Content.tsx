import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import MakePlayListModal from "./playlist_modal/MakePlayListModal";
import PlayerBar from "./player_bar/PlayerBar";

function Content() {
    return(
        <>
            <Header></Header>
			<Sidebar></Sidebar>
			<Main></Main>
			<MakePlayListModal></MakePlayListModal>
			<PlayerBar></PlayerBar>
        </>
    )
}
export default Content;