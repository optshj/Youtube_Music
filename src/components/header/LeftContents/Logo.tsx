import styled from 'styled-components';

const Wrapper = styled.div`
	font-size:20px;
	font-weight:bold;
	color:#fff;
	cursor:pointer;
	padding:0 5px;
`

function Logo(){
	return(
		<Wrapper>
			Music
		</Wrapper>
	)
}
export default Logo;