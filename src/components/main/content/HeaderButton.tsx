import { useEffect, useState } from "react";
import styled from "styled-components";
import { throttle } from "lodash";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

interface HeaderButtonProps{
    hasScrollbar:boolean;
    scrollRef:HTMLUListElement;
}

const Wrapper = styled.div<{ hasScrollbar :boolean}>`
    display: ${(props) => (props.hasScrollbar ? 'flex' : 'none')};
    align-items:flex-end;
    gap:16px;
`
const ArrowIconForm = styled.div`
    width:36px;
    height:36px;
    border-radius:50%;
    border:solid 1px rgba(255,255,255,.2);
    color:#fff;
`
const LeftArrowIconForm = styled(ArrowIconForm)<{isScrollLeft:boolean}>`
    cursor:${(props) => (props.isScrollLeft?'':'pointer')};
    &:hover {
        background-color:${(props) => (props.isScrollLeft?'#030303':'rgba(255,255,255,.1)')}
    }
`
const RightArrowIconForm = styled(ArrowIconForm)<{isScrollRight:boolean}>`
    cursor:${(props) => (props.isScrollRight?'':'pointer')};
    &:hover {
        background-color:${(props) => (props.isScrollRight?'#030303':'rgba(255,255,255,.1)')}
    }
`
const LeftIcon = styled(MdOutlineArrowBackIosNew)<{isScrollLeft:boolean}>`
    transform:translate(50%,50%);
    color: ${(props) => (props.isScrollLeft ?'#333':'#c0c0c0')};
    transition: color 0.2s linear;
`
const RightIcon = styled(MdOutlineArrowForwardIos)<{isScrollRight:boolean}>`
    transform:translate(70%,50%);
    color: ${(props) => (props.isScrollRight ?'#333':'#c0c0c0')};
    transition: color 0.2s linear;
`

function HeaderButton({hasScrollbar,scrollRef}:HeaderButtonProps){
    const [isScrollLeft,setIsScrollLeft] = useState(false);
    const [isScrollRight,setIsScrollRight] = useState(false);

    const scrollMove = throttle(() => {
        if (scrollRef) {
            const IsScrollLeft = scrollRef.scrollLeft === 0;
            const IsScrollRight = (scrollRef.scrollLeft + scrollRef.clientWidth >= scrollRef.scrollWidth - 1) && (scrollRef.clientWidth < scrollRef.scrollWidth)
            setIsScrollRight(IsScrollRight);
            setIsScrollLeft(IsScrollLeft);
        }
    },500);
    
    useEffect(() => {
        scrollMove();
        scrollRef.addEventListener('scroll',scrollMove);

        return () => {
            scrollRef.removeEventListener('scroll',scrollMove);
        }
    })
    const scrollToLeft = () => {
        scrollRef.scrollBy({
            left:-352,
            behavior:'smooth'
        })
    }
    const scrollToRight = () => {
        scrollRef.scrollBy({
            left:+352,
            behavior:'smooth'
        })
    }
    return(
        <Wrapper hasScrollbar={hasScrollbar}>
            <LeftArrowIconForm isScrollLeft={isScrollLeft} onClick={scrollToLeft}>
                <LeftIcon isScrollLeft={isScrollLeft}></LeftIcon>
            </LeftArrowIconForm>

            <RightArrowIconForm isScrollRight={isScrollRight} onClick={scrollToRight}>
                <RightIcon isScrollRight={isScrollRight}></RightIcon>
            </RightArrowIconForm>
        </Wrapper>
    )
}
export default HeaderButton;