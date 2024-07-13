import styled from 'styled-components';

import { useToggle } from '../../../context/ToggleContext';
import { IsScrollTop } from '../../../context/ScrollContext';

import Menu from './components/Menu'
import Logo from './components/Logo'
import Search from './components/Search';
import UserIcon from './components/UserIcon';
import PlayerPage from '../PlayerPage/PlayerPage';
import SideBar from '../SideBar/SideBar';


const Wrapper = styled.div<{$isBorder:boolean}>`
	position:fixed;
	display: flex;
	width: 100%;
	z-index:3;
	background-color: ${(props)=> (props.$isBorder ?'#030303':'')};
	border-bottom:${(props)=> (props.$isBorder?'1px solid rgba(255,255,255,.15)':'')};
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
	const { isComponentsOpen } = useToggle();
	const isPlayerPageOpen = isComponentsOpen(PlayerPage);
	const isSideBarOpen = isComponentsOpen(SideBar);
	const isScrollTop = IsScrollTop();

	const isBorder = !isScrollTop||isPlayerPageOpen 

	return(
		<Wrapper $isBorder={isBorder}>
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