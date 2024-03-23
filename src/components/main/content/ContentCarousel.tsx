import React,{useEffect,useRef} from "react";
import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.div`
    margin:16px 0 24px;
`
const ItemsWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    gap:16px;
    overflow-x:auto;
    max-width:min(calc(100vw - 452px),1478px);
    @media (max-width:1150px) and (min-width:936px){
        max-width:min(calc(100vw - 112px - 240px - 12px ),1478px);
    }
    @media (max-width:936px){
        max-width:100%;
    }
    margin:0 auto;
    padding:0;
    @media (max-width:616px){
        & > *:first-child {
            padding-left:16px;
        }
    
        & > *:last-child {
            padding-right:16px;
        }
    }
    @media (min-width:616px) and (max-width:935px){
        & > *:first-child {
            padding-left:56px;
        }
    
        & > *:last-child {
            padding-right:56px;
        }
    }
`

function MakeRandomNumber(min:number,max:number){
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

interface ContentCarouselProps {
    setHasScollbar: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContentCarousel({setHasScollbar}:ContentCarouselProps){
    const componentRef = useRef<any>(null);

    useEffect(()=> {
        checkScrollbar();
        window.addEventListener('resize',checkScrollbar);
        return () => window.removeEventListener('resize',checkScrollbar);
    },[]);
    const checkScrollbar = () => {
        const componentElement = componentRef.current;
        if (!componentElement || componentElement.scrollWidth <= componentElement.clientWidth){
            setHasScollbar(false);
        }
        else {
            setHasScollbar(true);
        }
    }

    // 스켈레톤용으로 4~8개의 똑같은 아이템으로 만들게 구현하였음.
    // 추후에 변경필요함. 작성일시: 2024-03-23
    const randomNumber = MakeRandomNumber(4,8);
    const ItemArray = Array.from({ length:randomNumber},(_,index) =>(
        <div key={index}>
            <Item></Item>
        </div>
    ));
    
    return(
        <>
            <Wrapper>
                <ItemsWrapper ref={componentRef}>
                    {ItemArray}
                </ItemsWrapper>
            </Wrapper>
        </>
    )
}
export default ContentCarousel;