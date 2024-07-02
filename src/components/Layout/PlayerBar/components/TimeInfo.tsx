import styled from "styled-components";

const Wrapper = styled.div`
    font-size:12px;
    color:#aaa;
    margin:0 16px 0 8px;
    white-space:nowrap;
    ${({theme}) => theme.medium`
        visibility:hidden;
    `}
`
export default function TimeInfo(){
    return(
        <Wrapper>NaN:NaN/NaN:NaN</Wrapper>
    )
}