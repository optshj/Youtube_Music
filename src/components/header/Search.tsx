import React from 'react';
import styled from 'styled-components';

import { GoSearch } from "react-icons/go";

const SearchForm = styled.div`
	width:480px;
	height:42px;
`
const SearchBar = styled.input`
	background-color:#030303;
`
function Search(){
	
	
	return(
		<>
			<SearchForm>
				
				<GoSearch />
				<SearchBar type="text" placeholder="노래,앨범,아티스트,팟캐스트 검색">
				</SearchBar>
			</SearchForm>
		</>
	)
}
export default Search;