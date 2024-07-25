import styled from 'styled-components';

import { useToggle } from '../../../context/ToggleContext';
import { IsScrollTop } from '../../../context/ScrollContext';

import LeftContent from './components/LeftContent'
import CenterContent from './components/CenterContent';
import RightContent from './components/RightContent';
import PlayerPage from '../PlayerPage/PlayerPage';

const Wrapper = styled.div<{$isBorder:boolean}>`
	position:fixed;
	display: flex;
	width: 100%;
	z-index:3;
	background-color: ${props => props.$isBorder ?'#030303':''};
	border-bottom:${props => props.$isBorder?'1px solid rgba(255,255,255,.15)':'1px solid transparent'};
	transition: all 0.2s linear;
`

export default function Header() {
	const { isComponentsOpen } = useToggle();
	const isPlayerPageOpen = isComponentsOpen(PlayerPage);
	const isScrollTop = IsScrollTop();

	const isBorder = !isScrollTop||isPlayerPageOpen 

	return(
		<Wrapper $isBorder={isBorder}>
			<LeftContent/>
			<CenterContent/>
			<RightContent/>
		</Wrapper>
	)
}