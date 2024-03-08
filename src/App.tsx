import React from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import MakePlayListModal from './components/modal/MakePlayListModal';

function App() {

	return (
		<>
			<Header></Header>
			<Sidebar></Sidebar>
			<Main></Main>
			<MakePlayListModal></MakePlayListModal>
		</>
	);
}

export default App;
