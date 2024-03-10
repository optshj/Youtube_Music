import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding:32px 24px;
`
const TilteForm = styled.div`
    position:relative;

`
const Label = styled.label`
    font-size:14px;
    color:rgba(255,255,255,0.7);
    position:absolute;
    width:100%;
    cursor:text;
    margin:0 0 3px;
`
const Input = styled.input`
    margin:0;
    outline:none;
    background:transparent;
    width:100%;
    box-shadow:none;
    border:none;
    padding:0;
    caret-color:#3ea6ff;
    color:white;
`
const Space = styled.div`
`
const ExplainForm = styled.div`
    margin:32px 0 40px;
`
const UnderScore = styled.div`
    position:relative;
    border-bottom:1px solid #606060;
    padding:0;
    width:100%;
    height:1px;
`
const UnderScoreActive = styled.div`
    visibility:hidden;
    position:relative;
    border-bottom:1px solid #606060;
    padding:0;
    width:100%;
    height:1px;
`
function Custom(){

    return(
        <>
            <Wrapper>
                <TilteForm>
                    <Space>&nbsp;</Space>
                    <Label htmlFor="input-title">제목</Label>
                    <Input type='text' id="input-title"></Input>
                    <UnderScore></UnderScore>
                </TilteForm>

                <ExplainForm>
                    <Space>&nbsp;</Space>
                    <Label htmlFor="input-explain">설명</Label>
                    <Input type='text' id="input-explain"></Input>
                    <UnderScore></UnderScore>
                </ExplainForm>
            </Wrapper>
        </>
    )
}

export default Custom;