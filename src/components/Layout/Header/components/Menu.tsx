import styled from 'styled-components';

import { useSideBar } from '../../../../context/SideBarContext';

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

export default function Menu(){
	const click = useSideBar();
	
	return(
		<Wrapper onClick={click}/>
	)
}