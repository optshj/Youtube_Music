import ExploreHeader from "./components/ExploreHeader"
import NewAlbum from "./components/NewAlbum"
import PopularSong from "./components/PopularSong"
import Genre from "./components/Genre"
import Popular from "./components/Popular"
import MusicVideo from "./components/MusicVideo"

import newAlbum from "../../data/newAlbum.json"
import popularSong from "../../data/popularSong.json"
import genre from "../../data/genre.json"
import popular from "../../data/popular.json"
import musicVideo from "../../data/musicVideo.json"

export default function Explore() {
    return (
        <>
            <ExploreHeader />
            <NewAlbum data={newAlbum} />
            <PopularSong data={popularSong} />
            <Genre data={genre} />
            <Popular data={popular} />
            <MusicVideo data={musicVideo} />
        </>
    )
}
