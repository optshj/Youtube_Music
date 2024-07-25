import styled from "styled-components";

import { useToggle } from "../../../../context/ToggleContext";

import { IoAddSharp } from "react-icons/io5";

import PlayListModal from "../../PlayListModal/PlayListModal";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    margin-bottom:16px;
    border-radius:18px;
    margin:0 16px;
    background-color:rgba(255,255,255,0.1);
    font-size:14px;
    cursor:pointer;
    height:36px;
    &:hover{
        background-color:#343434;
    }
`
const AddIcon = styled(IoAddSharp)`
    margin-right:8px;
    font-size:24px;
    color:#fff;
`
const Title = styled.div`
    line-height:1.3;
`

export default function LargeMakeList() {
    const { openComponent } = useToggle();
    const open = () => openComponent(PlayListModal);

    return(
        <Wrapper onClick={open}>
            <AddIcon/>
            <Title>새 재생목록</Title>
        </Wrapper>
    )
}