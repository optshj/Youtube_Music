import styled from "styled-components"

const Title = styled.h2`
    margin:0;
    font-size:45px;
    color:#fff;
    width:100%;
    ${({theme}) => theme.xlarge`
        font-size:28px;
    `}
    ${({theme}) => theme.large`
        font-size:24px;
    `}
`
function HeaderTitle() {
    return(
        <Title>Lorem ipsum dolor sit amet</Title>
    )
}
export default HeaderTitle;