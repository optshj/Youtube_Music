import React,{ useState, createContext, useMemo, useContext, useEffect} from "react";

const SidebarValueContext = createContext<any>(null);
const SidebarActionContext = createContext<any>(null);
    
export default function SidebarProvider({children}: {children:React.ReactNode}){
    const [isLargeSidebarOpen,setIsLargeSidebarOpen] = useState(true);
    const [prevWindowSize,setPrevWindowSize] = useState({isSmall:false,width:window.innerWidth})

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const newSizeSmall = windowWidth < 936;
            if (!prevWindowSize.isSmall && newSizeSmall) {
                setIsLargeSidebarOpen(!newSizeSmall);
                setPrevWindowSize({
                    isSmall: newSizeSmall,
                    width: windowWidth,
                });
            }
            else if (prevWindowSize.isSmall && !newSizeSmall) {
                setIsLargeSidebarOpen(!newSizeSmall);
                setPrevWindowSize({
                    isSmall: newSizeSmall,
                    width: windowWidth,
                });
            }
        }
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[prevWindowSize])

    const actions = useMemo(() => ({
            click() {
                setIsLargeSidebarOpen(preState => !preState);
            }
        }),[]
    )

    return(
        <SidebarValueContext.Provider value={isLargeSidebarOpen}>
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

export function IsLargeSidebarOpen(){
    const isOpen = useContext(SidebarValueContext);
    return isOpen;
}