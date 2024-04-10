import styled from 'styled-components';

import { useSidebar } from '../../../context/SidebarContext';

import { RxHamburgerMenu } from "react-icons/rx";

const Wrapper = styled(RxHamburgerMenu)`
	padding:6px;
	color:#fff;
	font-size:22px;
	cursor:pointer;
	border-radius:50%;
	&:hover{
        background-color:#343434;
    }
`

function Menu(){
	const click = useSidebar();
	
	return(
		<Wrapper onClick={click}></Wrapper>
	)
}
export default Menu;