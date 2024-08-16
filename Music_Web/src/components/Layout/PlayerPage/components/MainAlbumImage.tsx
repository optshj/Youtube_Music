import styled from "styled-components"

const Wrapper = styled.div`
    margin: auto 0;
    position: relative;
    padding-top: 100%;
    height: calc(100% - 408px);
    max-width: 600px;
    ${({ theme }) => theme.small`
        top:72px;
        margin:auto 15vw;
        min-width:250px;
    `}
`
const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

export default function MainAlbumImage() {
    return (
        <Wrapper>
            <Img src={"https://via.placeholder.com/1048x1048/666.png"} alt={"Placeholder"} />
        </Wrapper>
    )
}
