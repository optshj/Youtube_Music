import { useState } from "react";
import styled from "styled-components";

import ContentHeader from "./ContentHeader";
import ContentCarousel from "./ContentCarousel";

const Wrapper = styled.div`
    margin-bottom:24px;
`

export default function Content() {
    const [hasScrollbar,setHasScollbar] = useState(false);
    const [scrollRef, setScrollRef] = useState<HTMLUListElement>(document.createElement('ul'));

    return(
        <Wrapper>
            <ContentHeader 
                hasScrollbar={hasScrollbar}
                scrollRef={scrollRef}/>

            <ContentCarousel 
                setHasScollbar={setHasScollbar} 
                setScrollRef={setScrollRef}/>
        </Wrapper>
    )
}