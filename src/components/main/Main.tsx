import React from "react";
import styled from "styled-components";

import MainHeader from "./header/MainHeader";

const MainForm = styled.div`
    box-sizing:border-box;
    @media (min-width:936px){
        margin-left:240px;
    }
    @media (min-width:616px) and (max-width:936px){
        margin-left:72px;
    }
`
const MainPadding = styled.div`
`

function Main(){


    return(
        <>
            <MainPadding>
                <MainForm>
                    <MainHeader></MainHeader>
                </MainForm>
            </MainPadding>
        </>
    )
}
export default Main;