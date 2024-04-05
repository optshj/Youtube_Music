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
function TimeInfo(){
    return(
        <Wrapper>0:00/2:51</Wrapper>
    )
}
export default TimeInfo;