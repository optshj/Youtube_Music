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
    padding:0 12px;
    cursor:pointer;
    &:hover{
        background-color:#403f42;
    }
`

export default function HeaderButton({tag}:{tag:string}){
    return(
        <Wrapper>
            <LinkButton>
                {tag}
            </LinkButton>
        </Wrapper>
    )
}