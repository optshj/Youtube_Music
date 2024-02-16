import React,{ useState } from 'react';
import styled from 'styled-components';

import { GoSearch } from "react-icons/go";

const SearchForm = styled.div< {isFocused:boolean}>`
	display:flex;
	width:480px;
	height:42px;
	border-radius:8px;
	background-color: ${props => props.isFocused ? '#030303':'#292929'};
	border:1px solid #4a5056;
	&:foucs{
		backgorund-color:black;
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
const SearchIconForm = styled.div`
	color:#9a9e9b;
	font-size:20px;
	padding:8px 16px;
	cursor:pointer;
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
			<SearchForm isFocused={isSearchFocused} >
				<SearchIconForm>
					<GoSearch />
				</SearchIconForm>

				<SearchBar type="text" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" onFocus={handleFocus} onBlur={handleBlur}></SearchBar>
			</SearchForm>
		</>
	)
}
export default Search;