import Home from './pages/Home'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
export default function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>}/>
		</Routes>
		</BrowserRouter>
	);
}