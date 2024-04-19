import styled from "styled-components";

import { IoAddSharp } from "react-icons/io5";

import { useModal } from "../../../../context/ModalContext";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    margin-bottom:16px;
    border-radius:18px;
    background-color:rgba(255,255,255,0.1);
    font-size:14px;
    cursor:pointer;
    height:36px;
    &:hover{
        background-color:#343434;
    }
`
const AddIconForm = styled.div`
    margin-right:8px;
    font-size:24px;
    color:#fff;
`
const AddNameForm = styled.div`
    line-height:1.3;
`

function MakeNewPlayList() {
    const {open} = useModal();

    return(
        <Wrapper onClick={open}>
            <AddIconForm>
                <IoAddSharp/>
            </AddIconForm>

            <AddNameForm>
                새 재생목록
            </AddNameForm>
        </Wrapper>
    )
}
export default MakeNewPlayList;