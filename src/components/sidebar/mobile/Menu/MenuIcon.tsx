import React from "react";
import styled from "styled-components"
import { IconType } from "react-icons";

interface MenuIconProps {
    icon: IconType;
    descript: string;
}

const MenuIconForm = styled.div`
    padding:12px 0;
    display:flex;
    flex-direction:column;
    color:#fff;
    font-size:20px;
    align-items:center;
    cursor:pointer;
    border-radius:8px;
    &:hover{
        background-color:#343434;
    }
`
const MenuIconFont = styled.div`
    font-size:10px;
`
function MenuIcon({icon:Icon,descript}:MenuIconProps){

    return(
        <>
            <MenuIconForm>
                <Icon/>

                <MenuIconFont>
                    {descript}
                </MenuIconFont>
            </MenuIconForm>
        </>
    )
}
export default MenuIcon;