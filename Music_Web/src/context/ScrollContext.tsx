import React, {createContext, useEffect, useState, useContext} from 'react';
import { throttle } from 'lodash';

const ScrollContext = createContext<boolean>(true);

export default function ScrollProvider({children} : {children:React.ReactNode}) {
    const [isScrollTop,setIsScrollTop] = useState(true);

    const ScrollMove = throttle (() =>{
        const isScrollTop = window.scrollY === 0;
        setIsScrollTop(isScrollTop);
    },500)

    useEffect(()=> {
        window.addEventListener('scroll',ScrollMove);
        return () => window.removeEventListener('scroll',ScrollMove);
    },[ScrollMove])
    
    return(
        <ScrollContext.Provider value={isScrollTop}>
            {children}
        </ScrollContext.Provider>
    )
}
export function IsScrollTop(){
    const isScrollTop = useContext(ScrollContext);
    return isScrollTop;
}