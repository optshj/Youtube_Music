import styled from 'styled-components';

import { useToggle } from '../../../../context/ToggleContext';

import { RxHamburgerMenu } from "react-icons/rx";

import SideBar from '../../SideBar/SideBar';

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
	const { toggleComponent } = useToggle();
	
	return(
		<Wrapper onClick={() => toggleComponent(SideBar)}/>
	)
}