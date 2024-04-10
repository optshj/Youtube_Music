import styled from 'styled-components';

import Menu from './LeftContents/Menu'
import Logo from './LeftContents/Logo'
import Search from './CenterContents/Search';
import UserIcon from './RightContents/UserIcon';

import { IsLargeSidebarOpen } from '../../context/SidebarContext';
import { IsPlayerPageOpen } from '../../context/PlayerPageContext';

const Wrapper = styled.div<{isScrollTop:boolean,isPlayerPageOpen:boolean}>`
	position:fixed;
	display: flex;
	background-color:#030303;
	width:calc(100vw - 12px);
	z-index:1;
	border-bottom:${(props)=> (!props.isScrollTop||props.isPlayerPageOpen?'1px solid rgba(255,255,255,.15)':'0px solid transparent')};
	transition:border-bottom 0.2s linear;
`

const LeftContent = styled.div<{isSidebarOpen:boolean,isScrollTop:boolean,isPlayerPageOpen:boolean}>`
	display:flex;
	align-items:center;
	width:224px;
	padding-left:16px;
	z-index:2;
	border-right:${(props) => (!props.isPlayerPageOpen&&(props.isSidebarOpen&&props.isScrollTop)? '1px solid rgba(255,255,255,.15)':'0px solid transparent')};
	transition:border-right 0.2s linear;
	flex-shrink:0;
	${({theme}) => theme.medium`
		border:none;
	`}
`
const CenterContent = styled.div`
	display:flex;
	position:relative;
	align-items:center;
	width:100%;
	justify-content:flex-start;
	padding-left:100px;
	${({theme}) => theme.large`
		padding-left:56px;
	`}
	${({theme}) => theme.medium`
		justify-content:flex-end;
		padding-left:0;
	`}
`
const RightContent = styled.div`
	display:flex;
	padding:20px;
`

interface HeaderProps {
	isScrollTop:boolean
}
function Header({isScrollTop}:HeaderProps) {
	const isSidebarOpen = IsLargeSidebarOpen();
	const isPlyaerPageOpen = IsPlayerPageOpen();
	
	return(
		<Wrapper isScrollTop={isScrollTop} isPlayerPageOpen={isPlyaerPageOpen}>
			<LeftContent isSidebarOpen={isSidebarOpen} isScrollTop={isScrollTop} isPlayerPageOpen={isPlyaerPageOpen}>
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
	)
}
export default Header;