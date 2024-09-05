import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Library from "./pages/Library"
import Layout from "./pages/Layout"

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/Youtube_Music_Web/"} />} />
                    <Route path={"/Youtube_Music_Web/"} element={<Home />} />
                    <Route path={"/Youtube_Music_Web/explore"} element={<Explore />} />
                    <Route path={"/Youtube_Music_Web/library"} element={<Library />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
