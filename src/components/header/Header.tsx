import React from 'react';
import styled from 'styled-components';


import Menu from './Menu';
import Logo from './Logo';
import Search from './Search';
import UserIcon from './UserIcon';
import { IsWebSidebarOpen } from '../context/SidebarContext';

const Wrapper = styled.div`
	display: flex;
	background-color:#030303;
	justify-content:flex-start;
	position:fixed;
	width:calc(100vw - 12px);
	z-index:2;
`

const LeftContent = styled.div<{isOpen:boolean}>`
	padding-left:16px;
	align-items:center;
	display:flex;
	width:224px;
	z-index:2;
	border-right:${(props) => (props.isOpen ? '1px solid rgba(255,255,255,.15)' : 'none')};
	@media(max-width:936px){
		border:none;
	}
`
const CenterContent = styled.div`
	display:flex;
	position:relative;
	flex-grow:1;
	align-items:center;
	justify-content:flex-start;
	padding-left:100px;
	@media (max-width:1149px) {
		padding-left:56px;
	}
	@media (max-width:936px) {
		justify-content:flex-end;
		padding-left:0;
	}
`
const RightContent = styled.div`
	padding:20px;
	padding-right:100px;
	display:flex;
`
function Header() {
	const isOpen = IsWebSidebarOpen();

	return(
		<>
			<Wrapper>
				<LeftContent isOpen={isOpen}>
					<Menu/>
					<Logo/>
				</LeftContent>
				
			
				<CenterContent>
					<Search/>
				</CenterContent>
			
			
				<RightContent>
					<UserIcon/>
				</RightContent>
			</Wrapper>
		</>
	)
}

export default Header;