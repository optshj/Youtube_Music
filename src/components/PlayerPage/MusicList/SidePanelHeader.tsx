import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    height:48px;
    border-bottom:1px solid rgba(255,255,255,0.1);
    font-size:14px;
`
const TabContainer = styled.div`
    display:flex;
    height:100%;
    flex:1 1 auto;
`
const Content = styled.div<{isSelect:boolean}>`
    color:${(props) => (props.isSelect ? '#fff':'rgba(255,255,255,.7)')};
    height:100%;
    cursor:pointer;
    display:flex;
    padding:0 12px;
    align-items:center;
    justify-content:center;
    flex:1 1 auto;
    border-bottom:${(props) => (props.isSelect ? '1px solid #fff':'none')}
`
function SidePanelHeader(){
    const [selectType,setSelectType] = useState<String>('NextTrack');
    const handleClick = (type:String) => {
        setSelectType(type);
    }
    
    return(
        <Wrapper>
            <TabContainer>
                <Content isSelect={selectType === 'NextTrack'} onClick={() => handleClick('NextTrack')}>다음 트랙</Content>
                <Content isSelect={selectType ==='Lyrics'} onClick={() => handleClick("Lyrics")}>가사</Content>
                <Content isSelect={selectType === 'Related'} onClick={() => handleClick("Related")}>관련 항목</Content>
            </TabContainer>
        </Wrapper>
    )
}
export default SidePanelHeader;