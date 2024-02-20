import React from 'react';
import styled from 'styled-components';

import { RxHamburgerMenu } from "react-icons/rx";

const MenuForm = styled.div`
	padding: 6px;
	color:white;
	font-size:22px;
	cursor:pointer;
	border-radius:50%;
	width:22px;
	height:22px;
	&:hover{
        background-color:#343434;
    }
`

function Menu(){
	
	
	return(
		<>
			<MenuForm>
				<RxHamburgerMenu />
			</MenuForm>
		</>
	)
}

export default Menu;