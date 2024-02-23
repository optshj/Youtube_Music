import React from "react";
import styled from "styled-components";

import MainHeader from "./header/MainHeader";

const MainForm = styled.div`
    padding-top:64px;
    position:absolute;
    width:100%;
    @media (min-width:936px){
        margin-left:240px;
    }
    @media (min-width:616px) and (max-width:936px){
        margin-left:72px;
    }
`

function Main(){


    return(
        <>
            <MainForm>
                <MainHeader></MainHeader>
            </MainForm>
        </>
    )
}
export default Main;