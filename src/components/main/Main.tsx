import styled from "styled-components";

import Header from "./Header/Header";
import Content from "./Content/Content";

const Wrapper = styled.div`
    box-sizing:border-box;
    padding-top:64px;
    margin-left:240px;
    ${({theme}) => theme.medium`
        margin-left:72px;
    `}
    ${({theme}) => theme.small`
        margin-left:0;
    `}
`

function Main(){
    return(
        <Wrapper>
            <Header/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
        </Wrapper>
    )
}
export default Main;