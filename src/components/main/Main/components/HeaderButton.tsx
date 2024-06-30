import styled from "styled-components";

const Wrapper = styled.div`
    padding:40px 0 8px;
    margin:6px;
`
const LinkButton = styled.div`
    display:flex;
    height:36px;
    font-size:14px;
    border-radius:8px;
    align-items:center;
    background:rgba(255,255,255,.1);
    color:#fff;
    cursor:pointer;
    &:hover{
        background-color:#403f42;
    }
`
const FontForm = styled.div`
    margin:0 12px;
`

interface HeaderButtonProps {
    tag:string
}
export default function HeaderButton({tag}:HeaderButtonProps){
    return(
        <Wrapper>
            <LinkButton>
                <FontForm>{tag}</FontForm>
            </LinkButton>
        </Wrapper>
    )
}