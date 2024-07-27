import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

const Wrapper = styled.ul`
    padding:0;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(4,min-content);
    gap:16px;
`

export default function Genre() {
    return(
        <ContentWrapper title="분위기 및 장르">
            <Wrapper>

            </Wrapper>
        </ContentWrapper>
    )
}