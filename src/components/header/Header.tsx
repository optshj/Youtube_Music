import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';

import Menu from './Menu';
import Logo from './Logo';
import Search from './Search';
import UserIcon from './UserIcon';

import { IsWebSidebarOpen } from '../context/SidebarContext';

interface HeaderProps {
	isScrollTop:boolean
}

const Wrapper = styled.div<{isScrollTop:boolean}>`
	display: flex;
	background-color:#030303;
	justify-content:flex-start;
	position:fixed;
	width:calc(100vw - 12px);
	z-index:2;
	border-bottom:${(props)=> (props.isScrollTop?'0px solid transparent':'1px solid rgba(255,255,255,.15)')};
	transition:all 0.2s linear;
`

const LeftContent = styled.div<{isOpen:boolean,isScrollTop:boolean}>`
	padding-left:16px;
	align-items:center;
	display:flex;
	width:224px;
	z-index:2;
	border-right:${(props) => (props.isOpen&&props.isScrollTop ? '1px solid rgba(255,255,255,.15)' : '0px solid transparent')};
	transition:all 0.2s linear;
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
function Header({isScrollTop}:HeaderProps) {
	const isOpen = IsWebSidebarOpen();
	return(
		<>
			<Wrapper isScrollTop={isScrollTop}>
				<LeftContent isOpen={isOpen} isScrollTop={isScrollTop}>
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