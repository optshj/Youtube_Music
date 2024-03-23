import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ContentHeader from "./ContentHeader";
import ContentCarousel from "./ContentCarousel";

const Wrapper = styled.div`
    margin-bottom:24px;
`

function Content() {
    const [hasScrollbar,setHasScollbar] = useState(false);
    return(
        <>
            <Wrapper>
                <ContentHeader hasScrollbar={hasScrollbar}></ContentHeader>
                <ContentCarousel setHasScollbar={setHasScollbar}></ContentCarousel>
            </Wrapper>
        </>
    )
}
export default Content;