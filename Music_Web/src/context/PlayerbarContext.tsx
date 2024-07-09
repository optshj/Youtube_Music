import React, { useState,createContext,useContext,useMemo} from "react";
import { SongType } from "../types/songType";

const PlayerValueContext = createContext<any>(null);
const PlayerActionContext = createContext<any>(null);

export default function PlayerbarContext({children} : {children:React.ReactNode}){
    const [isOpen,setIsOpen] = useState(false);
    const [songData,setSongData] = useState<SongType | null>(null);

    const actions = useMemo(() => ({
        open(){
            setIsOpen(true);
        },
        setSongData(data:SongType){
            setSongData(data);
        }

    }),[])

    return(
        <PlayerValueContext.Provider value={{isOpen,songData}}>
            <PlayerActionContext.Provider value={actions}>
                {children}
            </PlayerActionContext.Provider>
        </PlayerValueContext.Provider>
    )
}

export function usePlayerbar() {
    const {open,setSongData} = useContext(PlayerActionContext);
    return {open,setSongData};
}
export function useSongData(){
    const songData = useContext(PlayerValueContext);
    return songData;
}
export function IsPlayerbarOpen(){
    const isOpen = useContext(PlayerValueContext);
    return isOpen;
}