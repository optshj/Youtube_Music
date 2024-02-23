import React from "react";
import styled from "styled-components";

interface HeaderButtonProps {
    name:string
}
const HeaderButtonForm = styled.div`
    padding:32px 0 16px;
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
`
const FontForm = styled.div`
    margin:0 12px;
`
function HeaderButton({name}:HeaderButtonProps){

    return(
        <>
            <HeaderButtonForm>
                <LinkButton>
                    <FontForm>
                        {name}
                    </FontForm>
                </LinkButton>
            </HeaderButtonForm>
        </>
    )
}

export default HeaderButton;