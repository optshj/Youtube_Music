import React,{useEffect,useRef} from "react";
import styled from "styled-components";
import throttle from 'lodash/throttle';

import Item from "./Item";

const Wrapper = styled.div`
    margin:16px 0 24px;
`
const ItemsWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    gap:16px;
    overflow-x:auto;
    margin:0 auto;
    padding:0;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large`
        max-width:${theme.widths.large}
    `}
    ${({theme}) => theme.medium`
        max-width:100%;
        & > *:first-child {
            padding-left:56px;
        }
    
        & > *:last-child {
            padding-right:56px;
        }
    `}
    ${({theme}) => theme.small`
        & > *:first-child {
            padding-left:16px;
        }
        
        & > *:last-child {
            padding-right:16px;
        }
    `}
`

function MakeRandomNumber(min:number,max:number){
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

interface ContentCarouselProps {
    setHasScollbar: React.Dispatch<React.SetStateAction<boolean>>;
    setScrollRef : React.Dispatch<React.SetStateAction<HTMLUListElement>>
}
function ContentCarousel({setHasScollbar,setScrollRef}:ContentCarouselProps){
    // 스켈레톤용으로 4~8개의 똑같은 아이템으로 만들게 구현하였음.
    // 추후에 변경필요함. 작성일시: 2024-03-23
    const randomNumber = MakeRandomNumber(4,8);
    const ItemArray = Array.from({ length:randomNumber},(_,index) =>(
        <div key={index}>
            <Item></Item>
        </div>
    ));


    const componentRef = useRef<HTMLUListElement>(null);

    const checkScrollbar = throttle(() => {
        const componentElement = componentRef.current;
        if (!componentElement || componentElement.scrollWidth <= componentElement.clientWidth){
            setHasScollbar(false);
        }
        else {
            setHasScollbar(true);
        }
    },200);

    const scrollMove = throttle(() => {
        const componentElement = componentRef.current;
        if (componentElement) {
            setScrollRef(componentElement);
        }
    },500);

    useEffect(()=> {
        scrollMove();
        checkScrollbar();
        
        const componentElement = componentRef.current;
        if (componentElement){
            componentElement.addEventListener('scroll',scrollMove);
        }
        window.addEventListener('resize',checkScrollbar);

        return () =>{
            if (componentElement){
                componentElement.removeEventListener('scroll',scrollMove);
            }
            window.removeEventListener('resize',checkScrollbar)
        };
    },[checkScrollbar,scrollMove]);
    
    return(
        <Wrapper>
            <ItemsWrapper ref={componentRef}>
                {ItemArray}
            </ItemsWrapper>
        </Wrapper>
    )
}
export default React.memo(ContentCarousel);