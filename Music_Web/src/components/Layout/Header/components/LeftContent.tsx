import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useToggle } from '../../../../context/ToggleContext';

import { RxHamburgerMenu } from "react-icons/rx";

import SideBar from '../../SideBar/SideBar';

const Wrapper = styled.div`
	display:flex;
	align-items:center;
	width:224px;
	padding-left:16px;
	flex-shrink:0;
`
const Menu = styled(RxHamburgerMenu)`
	padding:6px;
	color:#fff;
	font-size:22px;
	cursor:pointer;
	border-radius:50%;
	&:hover{
        background-color:#343434;
    }
`
const Logo = styled.div`
	font-size:20px;
	font-weight:bold;
	color:#fff;
	cursor:pointer;
	padding:0 5px;
`

export default function LeftContent(){
	const { toggleComponent } = useToggle();
	
	return(
		<Wrapper>
			<Menu onClick={() => toggleComponent(SideBar)}/>
			<Link to="/">
				<Logo>Music</Logo>
			</Link>
		</Wrapper>
	)
}