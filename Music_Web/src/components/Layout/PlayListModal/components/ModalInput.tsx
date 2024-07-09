import { useEffect, useRef } from "react";
import styled from "styled-components";
import SelectPublic from "./ModalSelectButton";

const UnderLineActive = styled.div`
    position:absolute;
    border-bottom:2px solid #3ea6ff;
    padding:0;
    width:100%;
    transform:scaleX(0);
    height:1px;
    transition:all 0.25s ease-in-out;
`
const UnderLineWrapper = styled.div`
    position:relative;
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
    &:focus{
        & + ${UnderLineWrapper} ${UnderLineActive}{
            transform:scaleX(1);
        }
    }
`
const Wrapper = styled.div`
    padding:32px 24px;
`
const Label = styled.label`
    font-size:14px;
    color:rgba(255,255,255,0.7);
    position:absolute;
    width:100%;
    cursor:text;
    margin:0 0 3px;
`
const EmptySpace = styled.div`
`
const TilteForm = styled.div`
    position:relative;
`
const ExplainForm = styled.div`
    margin:32px 0 34px;
`
const UnderLine = styled.div`
    position:absolute;
    border-bottom:1px solid #606060;
    padding:0;
    height:1px;
    width:100%;
`

export default function ModalInput({isOpen}:{isOpen:boolean}){
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect (()=> {
        if (isOpen && inputRef.current){
            inputRef.current.focus();
        }
    },[isOpen])

    return(
        <Wrapper>
            <TilteForm>
                <EmptySpace>&nbsp;</EmptySpace>
                <Label htmlFor="input-title">제목</Label>
                <Input type='text' id="input-title" ref={inputRef}></Input>

                <UnderLineWrapper>
                    <UnderLine/>
                    <UnderLineActive/>
                </UnderLineWrapper>

            </TilteForm>

            <ExplainForm>
                <EmptySpace>&nbsp;</EmptySpace>
                <Label htmlFor="input-explain">설명</Label>
                <Input type='text' id="input-explain"></Input>

                <UnderLineWrapper>
                    <UnderLine/>
                    <UnderLineActive/>
                </UnderLineWrapper>

            </ExplainForm>
            <SelectPublic/>
        </Wrapper>
    )
}