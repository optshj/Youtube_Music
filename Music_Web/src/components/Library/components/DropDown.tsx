import styled from "styled-components"

const Wrapper = styled.div`
    min-width:305px;
    border:1px solid rgba(255,255,255,0.1);
    border-radius: 2px;
    margin: 0 0 16px;
    background-color: #212121;
`
const Title = styled.div`
    border-bottom:1px solid rgba(255,255,255,0.1);
    padding:16px 20px 22px;
    font-size:14px;
    font-weight:400;
    line-height: 1.6;
    color:#fff;
`
const ItemWrapper = styled.div`
    max-height:422px;
    background-color: #212121;
    padding:8px 0;

`
const Item = styled.div`
    cursor:pointer;
`

export default function DropDown(){
    return(
        <Wrapper>
            <Title>정렬 기준</Title>
            <ItemWrapper>
                <Item>이름</Item>
                <Item>최신 추가된 순</Item>
                <Item>오래된 추가된 순</Item>
            </ItemWrapper>
        </Wrapper>
    )
}