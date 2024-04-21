import styled from "styled-components";

const Wrapper = styled.div`
    margin:auto 0;
    flex:none;
    position:relative;
    padding-top:100%;
    height: calc(100% - 408px);
    max-height:min(100vw - 64px);
    ${({theme}) => theme.small`
        top:72px;
        margin:auto 25vw;
    `}
`
const ImageWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
`
function AlbumImage(){
    return(
        <Wrapper>
            <ImageWrapper>
                <img src="https://via.placeholder.com/1048x1048/666.png" alt="Placeholder" style={{'width':'100%','height':'100%'}}/>
            </ImageWrapper>
        </Wrapper>
    )
}
export default AlbumImage;