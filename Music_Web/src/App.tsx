import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Library from "./pages/Library"
import Layout from "./pages/Layout"

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/explore"} element={<Explore />} />
                    <Route path={"/library"} element={<Library />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
