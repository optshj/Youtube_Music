import React from 'react';
import styled from 'styled-components';

const User = styled.div`
	cursor:pointer;
	width:26px;
	height:26px;
	border-radius:13px;
	background-color:#5c6bc0;
`
const UserName = styled.div`
	position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
	color: #d3d8ed;
	font-size:10px;
`

function UserIcon(){
	return(
		<User>
			<UserName>성빈</UserName>
		</User>
	)
}
export default UserIcon;