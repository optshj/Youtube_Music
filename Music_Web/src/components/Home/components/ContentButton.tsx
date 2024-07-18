import { useEffect, useState,useCallback } from "react";
import styled from "styled-components";
import { throttle } from "lodash";

import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos } from "react-icons/md";

const Wrapper = styled.div<{$hasScrollbar:boolean}>`
    display: ${props => props.$hasScrollbar ? 'flex' : 'none'};
    align-items:flex-end;
    gap:16px;
`
const ArrowIconForm = styled.div<{$isScroll:boolean}>`
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: solid 1px rgba(255, 255, 255, .2);
    color: #fff;
    cursor: ${props => props.$isScroll ? 'default' : 'pointer'};
    &:hover {
        background-color:${props => props.$isScroll?'#030303':'rgba(255,255,255,.1)'}
    }
`
const IconStyle = styled.div<{ $isDisabled: boolean }>`
    transform: translate(50%, 50%);
    color: ${props => props.$isDisabled ? '#333' : '#c0c0c0'};
    transition: color 0.2s linear;
`;

interface HeaderButtonProps{
    scrollRef:HTMLUListElement | null;
}
export default function ContentButton({scrollRef}:HeaderButtonProps){
    const [hasScrollbar,setHasScollbar] = useState(false);
    const [isScrollLeft,setIsScrollLeft] = useState(false);
    const [isScrollRight,setIsScrollRight] = useState(false);

    const checkScrollbar = useCallback(throttle(() => {
        if (!scrollRef || scrollRef.scrollWidth <= scrollRef.clientWidth){
            setHasScollbar(false);
        }
        else {
            setHasScollbar(true);
            const IsScrollLeft = scrollRef.scrollLeft === 0;
            const IsScrollRight = (scrollRef.scrollLeft + scrollRef.clientWidth >= scrollRef.scrollWidth - 1) && (scrollRef.clientWidth < scrollRef.scrollWidth)
            setIsScrollRight(IsScrollRight);
            setIsScrollLeft(IsScrollLeft);
        }
    },500),[scrollRef]);

    useEffect(()=> {
        checkScrollbar();
        
        if (scrollRef)
            scrollRef.addEventListener('scroll',checkScrollbar);
        window.addEventListener('resize',checkScrollbar);

        return () =>{
            if (scrollRef)
                scrollRef.removeEventListener('scroll',checkScrollbar);
            window.removeEventListener('resize',checkScrollbar)
        };
    },[scrollRef,checkScrollbar]);

    const scrollToLeft = () => {
        if (scrollRef){
            scrollRef.scrollBy({
                left:-352,
                behavior:'smooth'
            })
        }
    }
    const scrollToRight = () => {
        if (scrollRef){
            scrollRef.scrollBy({
                left:+352,
                behavior:'smooth'
            })
        }
    }

    return(
        <Wrapper $hasScrollbar={hasScrollbar}>
            <ArrowIconForm  onClick={scrollToLeft} $isScroll={isScrollLeft}>
                <IconStyle as={MdOutlineArrowBackIos} $isDisabled={isScrollLeft} />
            </ArrowIconForm>

            <ArrowIconForm onClick={scrollToRight} $isScroll={isScrollRight}>
                <IconStyle as={MdOutlineArrowForwardIos} $isDisabled={isScrollRight} />
            </ArrowIconForm>
        </Wrapper>
    )
}   