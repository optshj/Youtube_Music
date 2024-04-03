import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    height:48px;
    align-items:center;
    width:100%;
`
const TabContent = styled.div`
    display:flex;
    flex-direction:row;
`
const Content = styled.div`
    color:#fff;
    padding:0 12px;
    cursor:pointer;
`
function SidePanelHeader(){

    return(
        <Wrapper>
            <TabContent>
                <Content>다음 트랙</Content>
                <Content>가사</Content>
                <Content>관련 항목</Content>
            </TabContent>
        </Wrapper>
    )
}
export default SidePanelHeader;