import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:160px;
`
const Details = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:8px;
`
const TitleWrapper = styled.div`
    overflow:hidden;
`
const Title = styled.div`
    color:#fff;
    font-size:14px;
    cursor:pointer;
    font-weight:500;
    line-heigth:1.3;
    &:hover{
        text-decoration:underline;
    }
`
const SubTitleWrapper = styled.div`
    margin-top:3px;
    align-items:center;
`
const SubTitle = styled.div`
    white-space:normal;
    color:rgba(255,255,255,0.7);
    font-size:14px;
`
function Item(){
    return(
        <>
            <Wrapper>
                <img src="https://via.placeholder.com/160x160/333.png"/>
                <Details>
                    <TitleWrapper>
                        <Title>
                            Lorem ipsum
                        </Title>
                    </TitleWrapper>
                    <SubTitleWrapper>
                        <SubTitle>
                            Lorem ipusm
                        </SubTitle>
                    </SubTitleWrapper>
                </Details>
            </Wrapper>
        </>
    )
}
export default Item;