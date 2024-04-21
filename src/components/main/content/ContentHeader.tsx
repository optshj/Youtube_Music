import styled from "styled-components";

import HeaderTitle from "./HeaderTitle";
import HeaderButton from "./HeaderButton";

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
interface ContentHeaderProps{
    hasScrollbar:boolean;
    scrollRef:HTMLUListElement;
}
function ContentHeader({hasScrollbar,scrollRef}:ContentHeaderProps){
    return(
        <Wrapper>
            <HeaderTitle title={'Lorem ipusm dolor sit amet'}/>
            <HeaderButton $hasScrollbar={hasScrollbar} $scrollRef={scrollRef}/>
        </Wrapper>
    )
}
export default ContentHeader;