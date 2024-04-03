import styled from "styled-components";

interface HeaderButtonProps {
    name:string
}
const Wrapper = styled.div`
    padding:40px 0 8px;
    margin:6px;
`
const LinkButton = styled.div`
    border-radius:8px;
    display:flex;
    height:36px;
    background:rgba(255,255,255,.1);
    color:white;
    align-items:center;
    font-size:14px;
    cursor:pointer;
    &:hover{
        background-color:#403f42;
    }
`
const FontForm = styled.div`
    margin:0 12px;
`
function HeaderButton({name}:HeaderButtonProps){
    return(
        <Wrapper>
            <LinkButton>
                <FontForm>
                    {name}
                </FontForm>
            </LinkButton>
        </Wrapper>
    )
}
export default HeaderButton;