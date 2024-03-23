import React from "react";
import styled from "styled-components";

import ContentHeader from "./ContentHeader";
import ContentCarousel from "./ContentCarousel";

const Wrapper = styled.div`
    margin-bottom:24px;
`

function Content() {
    return(
        <>
            <Wrapper>
                <ContentHeader></ContentHeader>
                <ContentCarousel></ContentCarousel>
            </Wrapper>
        </>
    )
}
export default Content;