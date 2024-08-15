import React, { useEffect, useState } from "react"
import styled from "styled-components"

export default function useRipple<T extends HTMLElement>(ref: React.RefObject<T>) {
    const [ripples, setRipples] = useState<React.CSSProperties[]>([])
    useEffect(() => {
        if (ref.current) {
            const element = ref.current

            const handleClick = (e: MouseEvent) => {
                const rect = element.getBoundingClientRect()
                const left = e.clientX - rect.left
                const top = e.clientY - rect.top

                setRipples([
                    ...ripples,
                    {
                        left,
                        top,
                    },
                ])
            }
            element.addEventListener("click", handleClick)
            return () => element.removeEventListener("click", handleClick)
        }
        return () => {}
    }, [ref, ripples])

    return ripples.map(style => <RippleStyled style={{ ...style }} />)
}

const RippleStyled = styled.span`
    @keyframes rippleEffect {
        from {
            width: 0px;
            height: 0px;
            opacity: 0.5;
        }
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
    background-color: #fff;
    position: absolute;
    transform: translate(-50%, -50%);
    animation: rippleEffect 0.4s linear;
    border-radius: 50%;
    overflow: hidden;
`
