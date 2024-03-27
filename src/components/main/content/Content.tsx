import React, { useState } from "react";
import styled from "styled-components";

import ContentHeader from "./ContentHeader";
import ContentCarousel from "./ContentCarousel";

const Wrapper = styled.div`
    margin-bottom:24px;
`

function Content() {
    const [hasScrollbar,setHasScollbar] = useState(false);
    
    const [isScrollLeft,setIsScrollLeft] = useState(false);
    const [isScrollRight,setIsScrollRight] = useState(false);

    return(
        <>
            <Wrapper>
                <ContentHeader 
                hasScrollbar={hasScrollbar}
                isScrollLeft={isScrollLeft}
                isScrollRight={isScrollRight}></ContentHeader>

                <ContentCarousel 
                setHasScollbar={setHasScollbar} 
                setIsScrollLeft={setIsScrollLeft} 
                setIsScrollRight={setIsScrollRight}></ContentCarousel>
            </Wrapper>
        </>
    )
}
export default Content;