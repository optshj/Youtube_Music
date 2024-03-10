import React from "react";
import styled from "styled-components"
import { IconType } from "react-icons";

interface MenuIconProps {
    icon: IconType;
    descript: string;
}

const MenuIconForm = styled.div`
    display:flex;
    color:#fff;
    font-size:22px;
    padding:0 20px;
    height:48px;
    align-items:center;
    cursor:pointer;
    border-radius:8px;
    &:hover{
        background-color:#343434;
    }
`
const IconMargin = styled.div`
    margin-right:20px;
`
const MenuIconFont = styled.div`
    font-size:16px;
`
function MenuIcon({icon:Icon,descript}:MenuIconProps){

    return(
        <>
            <MenuIconForm>
                <IconMargin>
                <Icon/>
                </IconMargin>

                <MenuIconFont>
                    {descript}
                </MenuIconFont>
            </MenuIconForm>
        </>
    )
}
export default MenuIcon;