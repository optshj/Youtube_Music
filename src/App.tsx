import React from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import MakePlayListModal from './components/playlist_modal/MakePlayListModal';
import PlayerBar from './components/player_bar/PlayerBar';
import PlayerPage from './components/player_page/PlayerPage';

function App() {

	return (
		<>
			<Header></Header>
			<Sidebar></Sidebar>
			<Main></Main>
			<PlayerPage></PlayerPage>
			<MakePlayListModal></MakePlayListModal>
			<PlayerBar></PlayerBar>
		</>
	);
}

export default App;