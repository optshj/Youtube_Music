import React,{ useState } from 'react';
import styled from 'styled-components';

import { GoSearch } from "react-icons/go";

const WebSearchForm = styled.div<{isFocused:boolean,isSmall:boolean}>`
	display:flex;
	width:480px;
	height:40px;
	border-radius:8px;
	background-color: ${props => props.isFocused ? '#030303':'#292929'};
	border:1px solid #4a5056;
	&:foucs{
		backgorund-color:black;
	}
	@media (max-width:956px) {
		display: ${props => (props.isSmall || props.isFocused ? 'flex' : 'none')};
		width:calc(100vw - 12px - 32px);
		position:absolute;
	}
`
const MobileSearchForm = styled.div<{isSmall:boolean}>`
	@media (min-width:956px) {
		display: ${props => (props.isSmall? 'block' :'none')};
	}
`

const SearchBar = styled.input`
	width:366px;
	height:40px;
	padding-right:56px;
	font-size:16px;
	font-weight:400;
	background-color: transparent;
	border:none;
	color:white;
	&::placeholder{
		color:#9a9e9b;
	}
	&:focus{
		outline:none;
	}

`
const WebSearchIconForm = styled.div<{isFocused:boolean}>`
	color:${props => props.isFocused ? '#fff' : '#9a9e9b'};
	font-size:20px;
	padding:8px 16px;
	cursor:pointer;
`
const MobileSearchIconForm = styled.div`
	color:#fff;
`
function Search(){
	const [isSearchFocused,setIsSearchFocused] = useState(false);
	
	const handleFocus = () => {
		setIsSearchFocused(true);
	}
	const handleBlur = () => {
		setIsSearchFocused(false);
	}
	return(
		<>
			<WebSearchForm isFocused={isSearchFocused} isSmall={false} >
				<WebSearchIconForm isFocused={isSearchFocused}>
					<GoSearch />
				</WebSearchIconForm>

				<SearchBar type="text" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" onFocus={handleFocus} onBlur={handleBlur}></SearchBar>
			</WebSearchForm>
			<MobileSearchForm isSmall={true}>
				<MobileSearchIconForm>
					<GoSearch/>
				</MobileSearchIconForm>
			</MobileSearchForm>
			
		</>
	)
}
export default Search;