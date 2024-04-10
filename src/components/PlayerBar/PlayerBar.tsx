import styled from "styled-components";

import { IsPlayerbarOpen } from "../../context/PlayerbarContext";

import LeftControl from "./LeftControl";
import TimeInfo from "./TimeInfo";
import CenterControl from "./CenterControl";
import RightControl from "./RightControl";

const Wrapper = styled.div<{isOpen:boolean}>`
    display:flex;
    justify-content: space-between;
    visibility:${(props) => (props.isOpen ? 'visible':'hidden')};
    position:fixed;
    z-index:1;
    bottom:0;
    left:0;
    width:100%;
    height:72px;
    background-color:#212121;
`
const LeftContent = styled.div`
    display:flex;
    align-items:center;
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
`
function PlayerBar(){
    const isOpen = IsPlayerbarOpen();

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