import React,{ useState, createContext, useMemo, useContext} from "react";

const SidebarValueContext = createContext<any>(null);
const SidebarActionContext = createContext<any>(null);
    
export default function SidebarProvider({children}: {children:React.ReactNode}){
    const [isWebSidebarOpen,setISWebSidebarOpen] = useState(true);

    const actions = useMemo(
        () => ({
            click() {
                setISWebSidebarOpen(preState => !preState);
            }
        }),
        []
    )

    return(
        <SidebarValueContext.Provider value={isWebSidebarOpen}>
            <SidebarActionContext.Provider value={actions}>
                {children}
            </SidebarActionContext.Provider>
        </SidebarValueContext.Provider>
    )
}

export function useSidebar() {
    const {click} = useContext(SidebarActionContext);
    return click;
}

export function IsWebSidebarOpen(){
    const isOpen = useContext(SidebarValueContext);
    return isOpen;
}