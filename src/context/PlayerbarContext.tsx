import React, { useState,createContext,useContext,useMemo} from "react";

const PlayerValueContext = createContext<any>(null);
const PlayerActionContext = createContext<any>(null);

export default function PlayerbarContext({children} : {children:React.ReactNode}){
    const [isOpen,setIsOpen] = useState(false);

    const actions = useMemo(
        () => ({
            open(){
                setIsOpen(true);
            }
        }),[]
    )

    return(
        <PlayerValueContext.Provider value={isOpen}>
            <PlayerActionContext.Provider value={actions}>
                {children}
            </PlayerActionContext.Provider>
        </PlayerValueContext.Provider>
    )
}

export function usePlayerbar() {
    const {open} = useContext(PlayerActionContext);
    return {open};
}

export function IsPlayerbarOpen(){
    const isOpen = useContext(PlayerValueContext);
    return isOpen;
}