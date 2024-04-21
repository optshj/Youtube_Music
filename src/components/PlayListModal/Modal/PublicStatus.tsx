import styled from "styled-components";

import { SelectStatus } from "../../../context/SelecPublicContext";

import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GrConnect } from "react-icons/gr";


const StateForm = styled.div`
    position:relative;
    left:10px;
    top:4px;
    width:100%;
    color:#fff;
    font-size:14px;
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
                    <StateForm>공개</StateForm>
                </>
            )
        case 1 :
            return(
                <>
                    <IconFont>
                        <GrConnect/>
                    </IconFont>
                    <StateForm>일부공개</StateForm>
                </>
            )
            
        case 2 :
            return(
                <>
                    <IconFont>
                        <CiLock/>
                    </IconFont>
                        <StateForm>비공개</StateForm>
                </>
            )
        default :
            return <></>
    }

}
export default PublicStatus;