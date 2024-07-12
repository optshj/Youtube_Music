import React, { useState, createContext, useContext } from 'react';

interface ComponentProps {
    [key: string]: any;
}

interface OpenComponent {
    Component: React.ComponentType<any>;
    props: ComponentProps;
}

interface Dispatch {
    open: (Component: React.ComponentType<any>, props: ComponentProps) => void;
    close: (Component: React.ComponentType<any>) => void;
}

const ToggleStateContext = createContext<OpenComponent[]>([]);
const ToggleDispatchContext = createContext<Dispatch>({
    open: () => {},
    close: () => {}
});

export default function ToggleProvider({ children }: { children: React.ReactNode }) {
    const [openComponent, setOpenComponent] = useState<OpenComponent[]>([]);

    const open = (Component: React.ComponentType<any>, props: ComponentProps) => {
        setOpenComponent((elements) => {
            return [...elements, { Component, props }];
        });
    };

    const close = (Component: React.ComponentType<any>) => {
        setOpenComponent((elements) => {
            return elements.filter(element => element.Component !== Component);
        });
    };

    const dispatch = { open, close };

    return (
        <ToggleStateContext.Provider value={openComponent}>
            <ToggleDispatchContext.Provider value={dispatch}>
                {children}
            </ToggleDispatchContext.Provider>
        </ToggleStateContext.Provider>
    );
}

export function useToggle() {
    const { open,close } = useContext(ToggleDispatchContext);
    const openComponent = (Component:React.ComponentType<any>,props:ComponentProps) => {
        open(Component,props);
    }
    const closeComponent = (Component:React.ComponentType<any>) => {
        close(Component);
    }
    return {openComponent,closeComponent};
}

export function ToggleComponent() {
    const opendComponents = useContext(ToggleStateContext);
    const { close } = useContext(ToggleDispatchContext);

    return(
        <>
            {opendComponents.map((component, index) => {
                const { Component, props } = component;
                const { onSubmit, ...restProps } = props;

                const onClose = () => {
                    close(Component);
                };

                const handleSubmit = async () => {
                if (typeof onSubmit === "function") {
                    await onSubmit();
                }
                onClose();
                };

                return (
                <Component
                    key={index}
                    {...restProps}
                    onClose={onClose}
                    onSubmit={handleSubmit}
                />
                );
            })}
        </>
    )
}