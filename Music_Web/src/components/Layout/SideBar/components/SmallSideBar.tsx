import styled from "styled-components";

import { IsScrollTop } from "../../../../context/ScrollContext";
import { useToggle } from "../../../../context/ToggleContext";

import PlayerPage from "../../PlayerPage/PlayerPage";
import SmallMenu from "./SmallMenu";

const Wrapper = styled.div<{$isBorder:boolean}>`
    position:absolute;
    padding-top:66px;
    height:100%;
    width:72px;
    border-right:${(props)=> (props.$isBorder?'1px solid rgba(255,255,255,.15)':'')};
    transition:border-right 0.2s linear;
    ${({theme}) => theme.small`
        display:none;
    `}
`

export default function SmallSideBar(){
    const { isComponentsOpen } = useToggle();
    const isScrollTop = IsScrollTop();

    const isBorder = !isScrollTop||isComponentsOpen(PlayerPage);

    return(
        <Wrapper $isBorder={isBorder}>
            <SmallMenu/>
        </Wrapper>
    )
}