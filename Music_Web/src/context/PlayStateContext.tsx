import React, { createContext, useState,useMemo,useContext } from 'react';

const PlayStateValueContext = createContext<any>(null);
const PlayStateActionContext = createContext<any>(null);

export default function PlayStateProvider({ children }:{children:React.ReactNode}) {
    const [isPlay,setIsPlay] = useState(true);

    const actions = useMemo(() => ({
        togglePlayState(){
            setIsPlay(prestate => !prestate);
        }
    }),[]);

    return (
        <PlayStateActionContext.Provider value={actions}>
            <PlayStateValueContext.Provider value={isPlay}>
                {children}
            </PlayStateValueContext.Provider>
        </PlayStateActionContext.Provider>
    )
}

export function usePlayState() {
    const {togglePlayState} = useContext(PlayStateActionContext);
    return {togglePlayState};
}

export function IsPlayState() {
    const isPlay = useContext(PlayStateValueContext);
    return isPlay;
}