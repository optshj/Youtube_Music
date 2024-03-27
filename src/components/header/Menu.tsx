import React from 'react';
import styled from 'styled-components';

import { useSidebar } from '../context/SidebarContext';

import { RxHamburgerMenu } from "react-icons/rx";

const Wrapper = styled.div`
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
const MenuIcon = styled(RxHamburgerMenu)`
	transform:translate(0,-10%);
`

function Menu(){
	const click = useSidebar();
	
	return(
		<>
			<Wrapper >
				<MenuIcon onClick={click}></MenuIcon>
			</Wrapper>
		</>
	)
}

export default Menu;