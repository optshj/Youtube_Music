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
	padding:20px;
	display:flex;
	order:1;
`
const CenterContent = styled.div`
	display:flex;
	order:2;
`
const RightContent = styled.div`
	padding:20px;
	padding-right:100px;
	display:flex;
	order:3;
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