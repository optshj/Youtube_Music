import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	font-size:20px;
	font-weight:bold;
	color:#fff;
	cursor:pointer;
	padding:0 5px;
`

export default function Logo(){
	return(
		<Link to="/">
			<Wrapper>Music</Wrapper>
		</Link>
	)
}