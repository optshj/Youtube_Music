import { useState } from 'react';
import styled from 'styled-components';

import { GoSearch } from "react-icons/go";

interface FocusedProps {
	$isFocused:boolean;
}
const Wrapper = styled.div<FocusedProps>`
	display:flex;
	height:40px;
	width:100%;
	max-width:480px;
	border-radius:8px;
	background-color: ${props => props.$isFocused ? 'transparent':'#292929'};
	border:1px solid #4a5056;
	${({theme,$isFocused}) => theme.medium`
		background-color:transparent;
		justify-content:flex-end;
		border:${$isFocused ?'':'none'};
	`}
`
const SearchBar = styled.input<FocusedProps>`
	width:100%;
	height:40px;
	padding-right:56px;
	font-size:16px;
	font-weight:400;
	background-color: transparent;
	border:none;
	color:#fff;
	outline:none;
	&::placeholder{
		color:#9a9e9b;
	}
	${({theme,$isFocused}) => theme.medium`
		display:${$isFocused?'inline-block':'none'};
	`}
`
const Icon = styled(GoSearch)<FocusedProps>`
	font-size:20px;
	padding:8px 16px;
	color:${props => props.$isFocused ? '#fff' : '#9a9e9b'};
	cursor:pointer;
	${({theme}) => theme.medium`
		color:#fff;
	`}
`

export default function Search(){
	const [isSearchFocused,setIsSearchFocused] = useState(false);
	const handleFocus = () => {
		setIsSearchFocused(true);
	}
	const handleBlur = () => {
		setIsSearchFocused(false);
	}
	
	return(
		<Wrapper $isFocused={isSearchFocused}>
			<Icon $isFocused={isSearchFocused} onClick={handleFocus}/>

			<SearchBar type="text" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" 
				onFocus={handleFocus} 
				onBlur={handleBlur} 
				$isFocused={isSearchFocused}/>
		</Wrapper>
	)
}