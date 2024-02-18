import React from 'react';
import styled from "styled-components"


import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { ImFilePlay } from "react-icons/im";

import MenuIcon from './MenuIcon';

const MenuForm = styled.div`
    padding:8px 8px;
    width:100%; 
`
function Menu(){

    return(
        <>
            <MenuForm>
                <MenuIcon icon ={MdHomeFilled} descript='홈'></MenuIcon>
                <MenuIcon icon ={FaRegCompass} descript='둘러보기'></MenuIcon>
                <MenuIcon icon={ImFilePlay} descript='보관함'></MenuIcon>
            </MenuForm>
        </>

    )
}
export default Menu;