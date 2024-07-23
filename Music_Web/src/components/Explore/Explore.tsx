import ExploreHeader from "./components/ExploreHeader"
import NewAlbum from "./components/NewAlbum"

import musicList from "../../data/musicList.json";

export default function Explore() {
    return (
        <>
            <ExploreHeader/>
            {
                musicList.datas.map((musicListData,index) => {
                    return(
                        <NewAlbum key={index} musicListData={musicListData}/>
                    )
                })
            }
        </>
    )
}