import React from 'react';
import styled from 'styled-components';

const LogoForm = styled.div`
	font-size:20px;
	font-weight:bold;
	color:white;
	cursor:pointer;
	padding:0 5px;
`

function Logo(){
	
	
	return(
		<>
			<LogoForm>
				Music
			</LogoForm>
		</>
	)
}

export default Logo;