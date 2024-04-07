import styled from "styled-components";

import HeaderTitle from "./HeaderTitle";
import HeaderButton from "./HeaderButton";

interface ContentHeaderProps{
    hasScrollbar:boolean;
    scrollRef:HTMLUListElement;
}

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin:0 auto;
    gap:24px;
    padding:16px 0 0 0;
    max-width:${({theme}) => theme.widths.xlarge};
    ${({theme}) => theme.large`
        max-width:${theme.widths.large}
    `}
    ${({theme}) => theme.medium`
        max-width:${theme.widths.medium}
    `}
    ${({theme}) => theme.small`
        max-width:${theme.widths.small}
    `}
`
function ContentHeader({hasScrollbar,scrollRef}:ContentHeaderProps){
    return(
        <Wrapper>
            <HeaderTitle></HeaderTitle>
            <HeaderButton hasScrollbar={hasScrollbar} scrollRef={scrollRef}></HeaderButton>
        </Wrapper>
    )
}
export default ContentHeader;