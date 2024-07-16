import React, { useState,createContext,useContext,useMemo} from "react";
import { SongType } from "../types/APItypes";

const SongDataValueContext = createContext<any>(null);
const SongDataActionContext = createContext<any>(null);

export default function SongDataProvider({children} : {children:React.ReactNode}){
    const [songData,setSongData] = useState<SongType | null>(null);

    const actions = useMemo(() => ({
        setSongData(data:SongType){
            setSongData(data);
        }
    }),[])

    return(
        <SongDataValueContext.Provider value={songData}>
            <SongDataActionContext.Provider value={actions}>
                {children}
            </SongDataActionContext.Provider>
        </SongDataValueContext.Provider>
    )
}
export function useSongData(){
    const {setSongData} = useContext(SongDataActionContext);
    const songData = useContext(SongDataValueContext);
    return {setSongData,songData};
}