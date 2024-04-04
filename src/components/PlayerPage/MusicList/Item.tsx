import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    padding:0 8px;
    align-items:center;
    height:56px;
    border-bottom:1px solid rgba(255,255,255,.1);
`
const LeftItem = styled.div`
    margin:0 16px 0 0;
    width:32px;
    height:32px;
    cursor:pointer;
`
const SongInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-itme:center;
`
const SongTitle = styled.div`
    margin:0 0 4px;
    color:#fff;
    font-weight:500;
    font-size:14px;
`
const ArtistName = styled.div`
    color:#aaa;
    font-weight:400;
    font-size:14px;
`
const MenuButton = styled.div`
`
const PlayTime = styled.div`
`
function Item() {

    return(
        <Wrapper>
            <LeftItem>
                <img src="https://via.placeholder.com/60x60/666.png" alt="Placeholder" style={{'width':'100%'}}/>
            </LeftItem>
            <SongInfo>
                <SongTitle>Lorem</SongTitle>
                <ArtistName>Lorem</ArtistName>
            </SongInfo>
            <MenuButton></MenuButton>
            <PlayTime>2:58</PlayTime>
        </Wrapper>
    )
}
export default Item;