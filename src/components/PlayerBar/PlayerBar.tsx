import styled from "styled-components";

import { IsPlayerOpen } from "../../context/PlayerContext";

import LeftControl from "./LeftControl";
import TimeInfo from "./TimeInfo";
import CenterControl from "./CenterControl";
import RightControl from "./RightControl";


const Wrapper = styled.div<{isOpen:boolean}>`
    visibility:${(props) => (props.isOpen ? 'visible':'hidden')};
    position:fixed;
    bottom:0;
    left:0;
    z-index:2;
    width:100%;
    height:72px;
    display:grid;
    grid-template-areas:"start middle end";
    background-color:#212121;
`
const LeftContent = styled.div`
    display:flex;
    align-items:center;
    width:292px;
    height:72px;
    ${({theme}) => theme.large`
        width:241px;
    `}
    ${({theme}) => theme.medium`
        width:144px;
    `}
    ${({theme}) => theme.small`
        display:none;
    `}
`
const CenterContent = styled.div`
    display:flex;
    align-items:center;
    margin-left:8px;
    overflow:hidden;
`
const RightContent = styled.div`
    display:flex;
    align-items:center;
    margin-right:4px;
    justify-content:end;
`
function PlayerBar(){
    const isOpen = IsPlayerOpen();

    return(
        <Wrapper isOpen={isOpen}>
            <LeftContent>
                <LeftControl></LeftControl>
                <TimeInfo></TimeInfo>
            </LeftContent>

            <CenterContent>
                <CenterControl></CenterControl>
            </CenterContent>

            <RightContent>
                <RightControl></RightControl>
            </RightContent>
        </Wrapper>
    )
}
export default PlayerBar;