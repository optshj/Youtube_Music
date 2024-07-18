import { useState, createContext, useContext } from "react";
import { customAxios } from "../api/customAxios";

import { playListType } from "../types/APItypes";

const PlayListValueContext = createContext<playListType[]>([]);
const PlayListActionContext = createContext<() => void>(() => {});

export default function PlayListProvider({children}:{children:React.ReactNode}){
    const [playList, setPlayList] = useState<playListType[]>([])
    
    const fetchPlayList = async () => {
        try {
            const response = await customAxios.get("/api/playlists");
            setPlayList(response.data);
        } catch (e) {
            console.error(e);
        }
    }
    
    return(
        <PlayListValueContext.Provider value={playList}>
            <PlayListActionContext.Provider value={fetchPlayList}>
                {children}
            </PlayListActionContext.Provider>
        </PlayListValueContext.Provider>
    )
}
export function usePlayList(){
    const playList = useContext(PlayListValueContext);
    const fetchPlayList = useContext(PlayListActionContext);
    return {playList, fetchPlayList};
}