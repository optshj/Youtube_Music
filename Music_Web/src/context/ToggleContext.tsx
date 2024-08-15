import { useState, createContext, useContext, ComponentType } from "react"

interface OpenComponent {
    Component: ComponentType<any>
}

interface Dispatch {
    open: (Component: ComponentType<any>) => void
    close: (Component: ComponentType<any>) => void
    isOpen: (Component: ComponentType<any>) => boolean
}

const ToggleStateContext = createContext<OpenComponent[]>([])
const ToggleDispatchContext = createContext<Dispatch>({
    open: () => {},
    close: () => {},
    isOpen: () => false,
})

export default function ToggleProvider({ children }: { children: React.ReactNode }) {
    const [openComponent, setOpenComponent] = useState<OpenComponent[]>([])

    const open = (Component: ComponentType<any>) => {
        setOpenComponent(elements => {
            return [...elements, { Component }]
        })
    }
    const close = (Component: ComponentType<any>) => {
        setOpenComponent(elements => {
            return elements.filter(element => element.Component !== Component)
        })
    }
    const isOpen = (Component: ComponentType<any>) => {
        return openComponent.some(element => element.Component === Component)
    }

    const dispatch = { open, close, isOpen }

    return (
        <ToggleStateContext.Provider value={openComponent}>
            <ToggleDispatchContext.Provider value={dispatch}>
                {children}
            </ToggleDispatchContext.Provider>
        </ToggleStateContext.Provider>
    )
}

/**
    openComponent: 열고자 하는 컴포넌트를 열어주는 함수
    closeComponent: 닫고자 하는 컴포넌트를 닫아주는 함수
    toggleComponent: 열려있으면 닫고, 닫혀있으면 열어주는 함수
    isComponentsOpen: 컴포넌트가 열려있는지 확인하는 함수
*/
export function useToggle() {
    const { open, close, isOpen } = useContext(ToggleDispatchContext)

    const openComponent = (Component: ComponentType<any>) => {
        open(Component)
    }
    const closeComponent = (Component: ComponentType<any>) => {
        close(Component)
    }
    const isComponentsOpen = (Component: ComponentType<any>) => {
        return isOpen(Component)
    }
    const toggleComponent = (Component: ComponentType<any>) => {
        if (isOpen(Component)) closeComponent(Component)
        else openComponent(Component)
    }

    return { openComponent, closeComponent, toggleComponent, isComponentsOpen }
}
