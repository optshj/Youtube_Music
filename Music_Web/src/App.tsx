import Home from './pages/Home'
import Explore from './pages/Explore';
import Library from './pages/Library';

import {Routes,Route, BrowserRouter} from 'react-router-dom'

export default function App() {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/explore" element={<Explore/>}/>
					<Route path="/library" element={<Library/>}/>
				</Routes>
			</BrowserRouter>
	);
}