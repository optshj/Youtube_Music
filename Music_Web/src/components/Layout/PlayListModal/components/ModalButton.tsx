import styled from "styled-components";

import { useToggle } from "../../../../context/ToggleContext";
import PlayLisModal from "../PlayListModal";

const Wrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:16px 24px 24px;
    gap:8px;
`
const Button = styled.button<{$isBlack?:boolean}>`
    padding:0 16px;
    height:36px;
    font-size:14px;
    line-height:36px;
    border-radius:18px;
    cursor:pointer;
    border:none;
    white-space:nowrap;
    ${({$isBlack}) => $isBlack ? 
        `color:#f1f1f1;
        background:none;
        &:hover{
            background-color:#4d4d4d;
        }`
        :
        `color:#0f0f0f;
        background-color:#f1f1f1;
        &:hover{
            background-color:#d9d9d9;
        }`
    }
`

export default function ModalButton({onSubmit}:{onSubmit:()=>void}){
    const { closeComponent } = useToggle();
    const close = () => closeComponent(PlayLisModal);

    return(
        <Wrapper>
            <Button $isBlack={true} onClick={close}>취소</Button>
            <Button onClick={onSubmit}>만들기</Button>
        </Wrapper>
    )   
}