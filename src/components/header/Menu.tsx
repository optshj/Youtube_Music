import React from 'react';
import styled from 'styled-components';

import { RxHamburgerMenu } from "react-icons/rx";

const MenuForm = styled.div`
	padding:0 6px;
	color:white;
	font-size:22px;
	cursor:pointer;
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