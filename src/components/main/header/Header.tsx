import styled from 'styled-components';

import Menu from './components/Menu'
import Logo from './components/Logo'
import Search from './components/Search';
import UserIcon from './components/UserIcon';

import { IsLargeSideBarOpen } from '../../../context/SideBarContext';
import { IsPlayerPageOpen } from '../../../context/PlayerPageContext';
import { IsScrollTop } from '../../../context/ScrollContext';

const Wrapper = styled.div<{$borderBottom:boolean}>`
	position:fixed;
	display: flex;
	width: 100%;
	z-index:3;
	background-color: ${(props)=> (props.$borderBottom ?'#030303':'')};
	border-bottom:${(props)=> (props.$borderBottom?'1px solid rgba(255,255,255,.15)':'')};
	transition: all 0.2s linear;
`
const LeftContent = styled.div`
	display:flex;
	align-items:center;
	width:224px;
	padding-left:16px;
	flex-shrink:0;
`
const CenterContent = styled.div<{$isSideBarOpen:boolean}>`
	display:flex;
	align-items:center;
	width:100%;
	padding-left:${(props) => (props.$isSideBarOpen?'100px':'20px')};
	${({theme}) => theme.large`
		padding-left:56px;
	`}
	${({theme}) => theme.medium`
		justify-content:flex-end;
	`}
`
const RightContent = styled.div`
	display:flex;
	padding:20px;
`

export default function Header() {
	const isSideBarOpen = IsLargeSideBarOpen();
	const isPlyaerPageOpen = IsPlayerPageOpen();
	const isScrollTop = IsScrollTop();

	const borderBottom = !isScrollTop||isPlyaerPageOpen 

	return(
		<Wrapper $borderBottom={borderBottom}>
			<LeftContent>
				<Menu/>
				<Logo/>
			</LeftContent>
		
			<CenterContent $isSideBarOpen={isSideBarOpen}>
				<Search/>
			</CenterContent>
		
			<RightContent>
				<UserIcon/>
			</RightContent>
		</Wrapper>
	)
}