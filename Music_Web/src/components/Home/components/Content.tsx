import { useState,useEffect,useRef } from "react";
import styled from "styled-components";
import throttle from 'lodash/throttle';

import HeaderTitle from "./ContentHeaderTitle";
import HeaderButton from "./ContentHeaderButton";
import Item from "./Item";

const Wrapper = styled.div`
    margin-bottom:24px;
`
const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin:0 auto;
    gap:24px;
    padding:16px 0 0 0;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium` max-width:${theme.widths.medium}`}
    ${({theme}) => theme.small` max-width:${theme.widths.small}`}
`
const ItemsWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    gap:16px;
    overflow-x:auto;
    margin:0 auto;
    padding:16px 0 24px;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium`
        max-width:100%;
        & > *:first-child { padding-left:56px;}
        & > *:last-child { padding-right:56px;}
    `}
    ${({theme}) => theme.small`
        & > *:first-child { padding-left:16px;}
        & > *:last-child { padding-right:16px;}
    `}
`

const MakeRandomNumber = (min:number,max:number) => {
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

export default function Content() {
    const [hasScrollbar,setHasScollbar] = useState(false);
    const [scrollRef, setScrollRef] = useState<HTMLUListElement>(document.createElement('ul'));
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


    const randomNumber = MakeRandomNumber(4,8);
    const ItemArray = Array.from({ length:randomNumber},(_,index) =>(
        <Item title={"Title"} subTitle={"SubTitle"} key={index}/>
    ));

    return(
        <Wrapper>
            <HeaderWrapper>
                <HeaderTitle title={'Lorem ipusm dolor sit amet'}/>
                <HeaderButton $hasScrollbar={hasScrollbar} $scrollRef={scrollRef}/>
            </HeaderWrapper>

            <ItemsWrapper ref={componentRef}>
                {ItemArray}
            </ItemsWrapper>
        </Wrapper>
    )
}