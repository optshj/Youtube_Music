import HomeHeader from "./components/HomeHeader";
import Content from "./components/Content";

import musicList from "../../data/musicList.json";

export default function Home(){

    return(
        <>
            <HomeHeader/>
            {
                musicList.datas.map((musicListData,index) => {
                    return(
                        <Content key={index} musicListData={musicListData}/>
                    )
                })
            }
        </>
    )
}