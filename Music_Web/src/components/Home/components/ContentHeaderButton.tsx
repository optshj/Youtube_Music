import { useEffect, useState } from "react";
import styled from "styled-components";
import { throttle } from "lodash";

import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos } from "react-icons/md";

const Wrapper = styled.div<{$hasScrollbar:boolean}>`
    display: ${(props) => (props.$hasScrollbar ? 'flex' : 'none')};
    align-items:flex-end;
    gap:16px;
`
const ArrowIconForm = styled.div<{$isScroll:boolean}>`
    box-sizing: border-box  ;
    width:36px;
    height:36px;
    border-radius:50%;
    border:solid 1px rgba(255,255,255,.2);
    color:#fff;
    cursor:${(props) => (props.$isScroll?'':'pointer')};
    &:hover {
        background-color:${(props) => (props.$isScroll?'#030303':'rgba(255,255,255,.1)')}
    }
`
const IconStyle = styled.div<{ $isDisabled: boolean }>`
    transform: translate(50%, 50%);
    color: ${(props) => (props.$isDisabled ? '#333' : '#c0c0c0')};
    transition: color 0.2s linear;
`;

interface HeaderButtonProps{
    $hasScrollbar:boolean;
    $scrollRef:HTMLUListElement;
}
export default function ContentHeaderButton({$hasScrollbar,$scrollRef}:HeaderButtonProps){
    const [isScrollLeft,setIsScrollLeft] = useState(false);
    const [isScrollRight,setIsScrollRight] = useState(false);

    const scrollMove = throttle(() => {
        if ($scrollRef) {
            const IsScrollLeft = $scrollRef.scrollLeft === 0;
            const IsScrollRight = ($scrollRef.scrollLeft + $scrollRef.clientWidth >= $scrollRef.scrollWidth - 1) && ($scrollRef.clientWidth < $scrollRef.scrollWidth)
            setIsScrollRight(IsScrollRight);
            setIsScrollLeft(IsScrollLeft);
        }
    },500);
    
    useEffect(() => {
        scrollMove();
        $scrollRef.addEventListener('scroll',scrollMove);

        return () => {
            $scrollRef.removeEventListener('scroll',scrollMove);
        }
    })
    const scrollToLeft = () => {
        $scrollRef.scrollBy({
            left:-352,
            behavior:'smooth'
        })
    }
    const scrollToRight = () => {
        $scrollRef.scrollBy({
            left:+352,
            behavior:'smooth'
        })
    }
    return(
        <Wrapper $hasScrollbar={$hasScrollbar}>
            <ArrowIconForm $isScroll={isScrollLeft} onClick={scrollToLeft}>
                <IconStyle as={MdOutlineArrowBackIos} $isDisabled={isScrollLeft} />
            </ArrowIconForm>

            <ArrowIconForm $isScroll={isScrollRight} onClick={scrollToRight}>
                <IconStyle as={MdOutlineArrowForwardIos} $isDisabled={isScrollRight} />
            </ArrowIconForm>
        </Wrapper>
    )
}   