import React from 'react';
import styled from 'styled-components';


import Menu from './Menu';
import Logo from './Logo';
import Search from './Search';
import UserIcon from './UserIcon';



const HeaderForm = styled.div`
	display: flex;
  	justify-content: space-between;
`

const LeftContent = styled.div`
	padding-left:16px;
	align-items:center;
	display:flex;
	width:224px;
	z-index:2;
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
	return(
		<>
			<HeaderForm>
				<LeftContent>
					<Menu/>
					<Logo/>
				</LeftContent>
				
			
				<CenterContent>
					<Search/>
				</CenterContent>
			
			
				<RightContent>
					<UserIcon/>
				</RightContent>
			</HeaderForm>
		</>
	)
}

export default Header;