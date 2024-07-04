import styled from "styled-components"

const Title = styled.h2`
    width:100%;
    color:#fff;
    font-size:45px;
    overflow: visible;
    margin:0;
    ${({theme}) => theme.xlarge`
        font-size:28px;
    `}
    ${({theme}) => theme.large`
        font-size:24px;
    `}
`

export default function ContentHeaderTitle({title}:{title:string}) {
    return(
        <Title>{title}</Title>
    )
}