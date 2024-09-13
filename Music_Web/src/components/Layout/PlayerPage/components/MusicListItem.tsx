import styled from "styled-components"

import { RxDotsVertical } from "react-icons/rx"
import { MdPlayArrow } from "react-icons/md"

import MusicListHeader from "./MusicListHeader"

const Wrapper = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    flex: 1;
    padding: 0 16px;
`
const ListWrapper = styled.div`
    width: 100%;
`
const LeftItem = styled.div`
    margin: 0 16px 0 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
    position: relative;
`
const PlayButton = styled(MdPlayArrow)`
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    display: none;
    border-radius: 50%;
`
const SongInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 1px;
`
const SongTitle = styled.div`
    margin: 0 0 4px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
`
const ArtistName = styled.div`
    color: #aaa;
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;
`
const MenuButtonWrapper = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    &:hover {
        background-color: #4a4a4a;
    }
`
const MenuButton = styled(RxDotsVertical)`
    margin: 0 0 0 16px;
    color: #f1f1f1;
    display: none;
    transform: translate(-50%, 50%);
`
const PlayTime = styled.div`
    color: #aaa;
    font-size: 14px;
    line-height: 1.3;
`
const ItemWrapper = styled.div`
    display: flex;
    padding: 0 8px;
    align-items: center;
    height: 56px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    cursor: move;
    ${({ theme }) => theme.small`
        border:none;
    `}
    &:hover {
        ${PlayTime} {
            display: none;
        }
        ${MenuButton} {
            display: flex;
        }
        ${PlayButton} {
            display: inline-block;
        }
    }
`

const Item = () => {
    return (
        <ItemWrapper>
            <LeftItem>
                <PlayButton />
                <img
                    src={"https://via.placeholder.com/160x160/666.png"}
                    alt={"Placeholder"}
                    style={{ width: "32px", height: "32px" }}
                />
            </LeftItem>
            <SongInfo>
                <SongTitle>{"Lorem ipsum"}</SongTitle>
                <ArtistName>{"Lorem ipsum"}</ArtistName>
            </SongInfo>
            <MenuButtonWrapper>
                <MenuButton />
            </MenuButtonWrapper>
            <PlayTime>{"NaN:NaN"}</PlayTime>
        </ItemWrapper>
    )
}
export default function MusicListItem() {
    const ItemArray = Array.from({ length: 20 }, () => <Item />)

    return (
        <Wrapper>
            <MusicListHeader />
            <ListWrapper>{ItemArray}</ListWrapper>
        </Wrapper>
    )
}
