import styled from "styled-components"

const Wrapper = styled.div`
    padding: 20px;
`
const UserIcon = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5c6bc0;
    color: #fff;
    font-size: 10px;
    cursor: pointer;
`

export default function RightContent() {
    return (
        <Wrapper>
            <UserIcon>{"Me"}</UserIcon>
        </Wrapper>
    )
}
