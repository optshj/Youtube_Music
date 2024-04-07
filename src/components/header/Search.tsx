import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { GoSearch } from "react-icons/go";

interface FocusedProps {
	isFocused:boolean;
}
const WebSearchForm = styled.div<{isFocused:boolean}>`
	position:relative;
	display:flex;
	height:40px;
	width:100%;
	max-width:480px;
	border-radius:8px;
	background-color: ${props => props.isFocused ? '#030303':'#292929'};
	border:1px solid #4a5056;
	z-index:2;
	&:foucs{
		backgorund-color:black;
	}
	${({theme}) => theme.medium`
		background-color:#030303;
		justify-content:flex-end;
		border:${(props:FocusedProps) => (props.isFocused?'':'none')};
	`}
`
const SearchBar = styled.input<{isFocused:boolean}>`
	width:100%;
	height:40px;
	padding-right:56px;
	font-size:16px;
	font-weight:400;
	background-color: transparent;
	border:none;
	color:white;
	outline:none;
	&::placeholder{
		color:#9a9e9b;
	}
	${({theme}) => theme.medium`
		display:${(props:FocusedProps) => (props.isFocused?'inline-block':'none')};
	`}

`
const WebSearchIconForm = styled(GoSearch)<{isFocused:boolean}>`
	font-size:20px;
	padding:8px 16px;
	color:${props => props.isFocused ? '#fff' : '#9a9e9b'};
	cursor:pointer;
	${({theme}) => theme.medium`
		color:#fff;
	`}
`
function Search(){
	const [isSearchFocused,setIsSearchFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() =>{
		if (inputRef.current){
			inputRef.current.focus();
		}
	},[isSearchFocused]);
	const handleFocus = () => {
		setIsSearchFocused(true);
	}
	const handleBlur = () => {
		setIsSearchFocused(false);
	}
	
	return(
		<WebSearchForm isFocused={isSearchFocused}>
			<WebSearchIconForm isFocused={isSearchFocused} onClick={handleFocus}>
			</WebSearchIconForm>

			<SearchBar type="text" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" 
			ref={inputRef}
			onFocus={handleFocus} 
			onBlur={handleBlur} 
			isFocused={isSearchFocused}></SearchBar>
		</WebSearchForm>
	)
}
export default Search;