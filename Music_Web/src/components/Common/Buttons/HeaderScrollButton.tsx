import { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import { throttle } from "lodash"

import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"

const Wrapper = styled.div<{ $hasScrollbar: boolean }>`
    visibility: ${props => (props.$hasScrollbar ? "visible" : "hidden")};
    display: flex;
    align-items: flex-end;
    gap: 16px;
`
const ArrowIconForm = styled.div<{ $isScroll: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: solid 1px rgba(255, 255, 255, 0.2);
    color: #fff;
    cursor: ${props => (props.$isScroll ? "default" : "pointer")};
    &:hover {
        background-color: ${props => (props.$isScroll ? "#030303" : "rgba(255,255,255,.1)")};
    }
`
const IconStyle = styled.div<{ $isDisabled: boolean }>`
    color: ${props => (props.$isDisabled ? "#333" : "#c0c0c0")};
    transition: color 0.2s linear;
`

interface HeaderScrollButtonProps {
    scrollRef: React.RefObject<HTMLElement>
}
export default function HeaderScrollButton({ scrollRef }: HeaderScrollButtonProps) {
    const [hasScrollbar, setHasScrollbar] = useState(false)
    const [isScrollLeft, setIsScrollLeft] = useState(false)
    const [isScrollRight, setIsScrollRight] = useState(false)

    const checkScrollbar = useCallback(
        throttle(() => {
            if (scrollRef.current && scrollRef.current.scrollWidth > scrollRef.current.clientWidth) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
                setHasScrollbar(true)
                setIsScrollLeft(scrollLeft === 0)
                setIsScrollRight(scrollLeft + clientWidth >= scrollWidth)
            } else {
                setHasScrollbar(false)
            }
        }, 500),
        [scrollRef]
    )

    useEffect(() => {
        checkScrollbar()

        if (scrollRef.current) scrollRef.current.addEventListener("scroll", checkScrollbar)
        window.addEventListener("resize", checkScrollbar)

        return () => {
            if (scrollRef.current) scrollRef.current.removeEventListener("scroll", checkScrollbar)
            window.removeEventListener("resize", checkScrollbar)
        }
    }, [scrollRef, checkScrollbar])

    const scrollToLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -352,
                behavior: "smooth"
            })
        }
    }
    const scrollToRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: +352,
                behavior: "smooth"
            })
        }
    }

    return (
        <Wrapper $hasScrollbar={hasScrollbar}>
            <ArrowIconForm onClick={scrollToLeft} $isScroll={isScrollLeft}>
                <IconStyle as={MdOutlineArrowBackIos} $isDisabled={isScrollLeft} />
            </ArrowIconForm>

            <ArrowIconForm onClick={scrollToRight} $isScroll={isScrollRight}>
                <IconStyle as={MdOutlineArrowForwardIos} $isDisabled={isScrollRight} />
            </ArrowIconForm>
        </Wrapper>
    )
}
