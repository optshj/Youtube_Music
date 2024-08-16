import HomeHeader from "./components/HomeHeader"
import Content from "./components/Content"

import musicList from "../../data/musicList.json"

export default function Home() {
    return (
        <>
            <HomeHeader />
            {musicList.map(musicListData => {
                return <Content musicListData={musicListData} />
            })}
        </>
    )
}
