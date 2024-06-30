import styled from 'styled-components';

const Wrapper = styled.div`
	width:26px;
	height:26px;
	border-radius:50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color:#5c6bc0;
	cursor:pointer;
`
const UserName = styled.div`
	color: #fff;
	font-size:10px;
`

export default function UserIcon(){
	return(
		<Wrapper>
			<UserName>Me</UserName>
		</Wrapper>
	)
}