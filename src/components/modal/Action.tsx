import React from "react";
import styled from "styled-components";

import { useModal } from "../context/ModalContext";

const ActionForm = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:16px 24px 24px;
    gap:8px;
`
const CancelButton = styled.button`
    padding:0 16px;
    height:36px;
    font-size:14px;
    line-height:36px;
    border-radius:18px;
    color:#f1f1f1;
    cursor:pointer;
    border:none;
    background:none;
    &:hover{
        background-color:#4d4d4d;
    }
`
const MakeButton = styled.button`
    padding:0 16px;
    height:36px;
    font-size:14px;
    line-height:36px;
    border-radius:18px;
    color:#0f0f0f;
    cursor:pointer;
    border:none;
    background-color:#f1f1f1;
    &:hover{
        background-color:#d9d9d9;
    }
`
function Action(){
    const {close} = useModal();

    return(
        <>
            <ActionForm>
                <CancelButton onClick={close}>취소</CancelButton>
                <MakeButton>만들기</MakeButton>
            </ActionForm>
        </>
    )   
}
export default Action;