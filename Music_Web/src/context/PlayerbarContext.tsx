import React, { useState,createContext,useContext,useMemo} from "react";
import { SongType } from "../types/songType";

const PlayerValueContext = createContext<any>(null);
const PlayerActionContext = createContext<any>(null);

export default function PlayerbarContext({children} : {children:React.ReactNode}){
    const [songData,setSongData] = useState<SongType | null>(null);

    const actions = useMemo(() => ({
        setSongData(data:SongType){
            setSongData(data);
        }

    }),[])

    return(
        <PlayerValueContext.Provider value={songData}>
            <PlayerActionContext.Provider value={actions}>
                {children}
            </PlayerActionContext.Provider>
        </PlayerValueContext.Provider>
    )
}
export function useSongData(){
    const {setSongData} = useContext(PlayerActionContext);
    const songData = useContext(PlayerValueContext);
    return {setSongData,songData};
}