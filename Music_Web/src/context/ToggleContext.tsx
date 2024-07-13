import React, { useState, createContext, useContext } from 'react';

interface OpenComponent {
    Component: React.ComponentType<any>;
}

interface Dispatch {
    open: (Component: React.ComponentType<any>) => void;
    close: (Component: React.ComponentType<any>) => void;
    isOpen: (Component: React.ComponentType<any>) => boolean;
}

const ToggleStateContext = createContext<OpenComponent[]>([]);
const ToggleDispatchContext = createContext<Dispatch>({
    open: () => {},
    close: () => {},
    isOpen: () => false
});

export default function ToggleProvider({ children }: { children: React.ReactNode }) {
    const [openComponent, setOpenComponent] = useState<OpenComponent[]>([]);

    const open = (Component: React.ComponentType<any>) => {
        setOpenComponent((elements) => {
            return [...elements, { Component}];
        });
    };
    const close = (Component: React.ComponentType<any>) => {
        setOpenComponent((elements) => {
            return elements.filter(element => element.Component !== Component);
        });
    };
    const isOpen = (Component: React.ComponentType<any>) => {
        return openComponent.some(element => element.Component === Component);
    };

    const dispatch = { open, close, isOpen };

    return (
        <ToggleStateContext.Provider value={openComponent}>
            <ToggleDispatchContext.Provider value={dispatch}>
                {children}
            </ToggleDispatchContext.Provider>
        </ToggleStateContext.Provider>
    );
}

/**
    openComponent: 열고자 하는 컴포넌트를 열어주는 함수
    closeComponent: 닫고자 하는 컴포넌트를 닫아주는 함수
    toggleComponent: 열려있으면 닫고, 닫혀있으면 열어주는 함수
    isComponentsOpen: 컴포넌트가 열려있는지 확인하는 함수
*/
export function useToggle() {
    const { open,close,isOpen } = useContext(ToggleDispatchContext);

    const openComponent = (Component:React.ComponentType<any>) => {
        open(Component);
    }
    const closeComponent = (Component:React.ComponentType<any>) => {
        close(Component);
    }
    const isComponentsOpen = (Component: React.ComponentType<any>) => {
        return isOpen(Component);
    }
    const toggleComponent = (Component:React.ComponentType<any>) => {
        if(isOpen(Component))
            closeComponent(Component);
        else
            openComponent(Component);
    }

    return {openComponent,closeComponent, toggleComponent, isComponentsOpen};
}