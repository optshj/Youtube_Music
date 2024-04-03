import styled from "styled-components";

import { IoAddSharp } from "react-icons/io5";

import { useModal } from "../../../context/ModalContext";

const Wrapper = styled.div`
    display:flex;
    color:white;
    margin-bottom:16px;
    display:flex;
    border-radius:18px;
    background-color:rgba(255,255,255,0.1);
    font-size:14px;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    height:36px;
    &:hover{
        background-color:#343434;
    }
`
const AddIconForm = styled.div`
    margin-right:8px;
    color:white;
`
const AddNameForm = styled.div`
    line-height:36px;
`

function MakeNewPlayList() {
    const {open} = useModal();

    return(
        <Wrapper onClick={open}>
            <AddIconForm>
                <IoAddSharp size={24} />
            </AddIconForm>

            <AddNameForm>
                새 재생목록
            </AddNameForm>
        </Wrapper>
    )
}
export default MakeNewPlayList;