import React, { useContext, createContext, useState, useMemo } from "react";
    
const ModalValueContext = createContext<any>(null);
const ModalActionContext = createContext<any>(null);

export default function ModalProvider({children} : {children:React.ReactNode}) {
    const [isOpen,setIsOpen] = useState(false);

    const actions = useMemo(() => ({
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        }
        }),[])

    return(
        <ModalValueContext.Provider value={isOpen}>
            <ModalActionContext.Provider value={actions}>
                {children}
            </ModalActionContext.Provider>
        </ModalValueContext.Provider>
    )
}

export function useModal() {
    const {open,close} = useContext(ModalActionContext);
    return {open,close};
}

export function IsModalOpen(){
    const isOpen = useContext(ModalValueContext);
    return isOpen;
}