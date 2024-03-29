import React from "react";
import styled from "styled-components";

import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GrConnect } from "react-icons/gr";

import { SelectStatus } from "../context/SelecPublicContext";

const StateForm = styled.div`
    width:100%;
    left:10px;
    color:white;
    font-size:14px;
    top:4px;
    position:relative;
`
const IconFont = styled.div`
    color:#aaa;
    font-size:24px;
    padding-left:4px;
`
function PublicStatus(){
    const selectStatus = SelectStatus();
    
    switch(selectStatus){
        case 0 :
            return(
                <>
                    <IconFont>
                        <IoEarthOutline />
                    </IconFont>
                    <StateForm>
                        공개
                    </StateForm>
                </>
            )
        case 1 :
            return(
                <>
                    <IconFont>
                        <GrConnect/>
                    </IconFont>
                    <StateForm>
                        일부공개
                    </StateForm>
                </>
            )
            
        case 2 :
            return(
                <>
                    <IconFont>
                        <CiLock/>
                    </IconFont>
                    <StateForm>
                        비공개
                    </StateForm>
                </>
            )
        default :
            return <></>
    }

}
export default PublicStatus;