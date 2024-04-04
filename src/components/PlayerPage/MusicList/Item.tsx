import styled from "styled-components";

import { RxDotsVertical } from "react-icons/rx";
import { MdPlayArrow } from "react-icons/md";

const LeftItem = styled.div`
    margin:0 16px 0 0;
    width:32px;
    height:32px;
    cursor:pointer;
    position:relative;
`
const PlayButton = styled(MdPlayArrow)`
    position:absolute;
    width:100%;
    height:100%;
    color:#fff;
    display:none;
`
const SongInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-itme:center;
    flex:1;
    min-width:1px;
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
const MenuButtonWrapper = styled.div`
    width:32px;
    height:32px;
    border-radius:50%;
    &:hover{
        background-color:#4a4a4a;
    }
`
const MenuButton = styled(RxDotsVertical)`
    margin:0 0 0 16px;
    color:#f1f1f1;
    display:none;
    transform:translate(-50%,50%);
`
const PlayTime = styled.div`
    color:#aaa;
    font-size:14px;
    line-height:1.3;
`
const Wrapper = styled.div`
    display:flex;
    padding:0 8px;
    align-items:center;
    height:56px;
    border-bottom:1px solid rgba(255,255,255,.1);
    cursor:move;
    &:hover{
        ${PlayTime}{
            display:none;
        }
        ${MenuButton}{
            display:flex;
        }
        ${PlayButton}{
            display:inline-block;
        }

    }
`
function Item() {

    return(
        <Wrapper>
            <LeftItem>
                <PlayButton></PlayButton>
                <img src="https://via.placeholder.com/60x60/666.png" alt="Placeholder" style={{'width':'100%'}}/>
            </LeftItem>
            <SongInfo>
                <SongTitle>Lorem ipsum</SongTitle>
                <ArtistName>Lorem ipsum</ArtistName>
            </SongInfo>
            <MenuButtonWrapper>
                <MenuButton></MenuButton>
            </MenuButtonWrapper>
            <PlayTime>2:58</PlayTime>
        </Wrapper>
    )
}
export default Item;