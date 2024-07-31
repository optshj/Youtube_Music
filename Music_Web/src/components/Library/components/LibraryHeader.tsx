import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    margin:0 auto;
    border-bottom:1px solid rgba(255,255,255,.1);
    position: relative;
    left:-16px;
    max-width:${({theme}) => theme.widths.xlarge};  
    ${({theme}) => theme.large` max-width:${theme.widths.large}`}
    ${({theme}) => theme.medium` max-width:${theme.widths.medium}`}
    ${({theme}) => theme.small` max-width:${theme.widths.small}`}
`
const TabButton = styled.div<{$isActive:boolean}>`
    cursor:pointer;
    font-size:14px;
    white-space: nowrap;
    padding:16px 0;
    margin: 0 16px;
    ${props => props.$isActive ?
        `color:#fff;
        border-bottom:2px solid #fff;`  
        :
        `color:rgba(255,255,255,.5);`}
`

export default function LibraryHeader(){
    return(
        <Wrapper>
            <TabButton $isActive={true}>보관함</TabButton>
            <TabButton $isActive={false}>오프라인 저장</TabButton>
        </Wrapper>
    )
}