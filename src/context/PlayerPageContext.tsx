import React, { useContext, createContext, useState, useMemo } from "react";

const PlayerPageValueContext = createContext<any>(null);
const PlayerPageActionContext = createContext<any>(null);

export default function PlayerPageProvider({children} : {children:React.ReactNode}) {
    const [isOpen,setIsOpen] = useState(false);

    const actions = useMemo(() => ({
        click(){
            setIsOpen(prestate => !prestate);
        }
    }),[])
    
    return(
        <PlayerPageValueContext.Provider value={isOpen}>
            <PlayerPageActionContext.Provider value={actions}>
                {children}
            </PlayerPageActionContext.Provider>
        </PlayerPageValueContext.Provider>
    )
}

export function usePlayerPage() {
    const {click} = useContext(PlayerPageActionContext);
    return {click};
}

export function IsPlayerPageOpen(){
    const isOpen = useContext(PlayerPageValueContext);
    return isOpen;
}