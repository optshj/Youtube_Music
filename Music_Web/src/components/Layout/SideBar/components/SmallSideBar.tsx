import styled from "styled-components";
import { Link,useLocation } from "react-router-dom";
import { IconType } from "react-icons";

import { IsScrollTop } from "../../../../context/ScrollContext";
import { useToggle } from "../../../../context/ToggleContext";

import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { ImFilePlay } from "react-icons/im";


import PlayerPage from "../../PlayerPage/PlayerPage";

const IconWrapper = styled.div<{$selectState?:boolean}>`
    display:flex;
    color:#fff;
    font-size:20px;
    flex-direction:column;
    align-items:center;
    padding:12px 0;
    cursor:pointer;
    border-radius:8px;
    background-color:${props => props.$selectState ? '#1d1d1d':''};
    &:hover{
        background-color:#343434;
    }
`
const IconFont = styled.div`
    font-size:10px;
`
const Wrapper = styled.div<{$isBorder:boolean}>`
    position:absolute;
    padding-top:66px;
    height:100%;
    width:72px;
    border-right:${props => props.$isBorder?'1px solid rgba(255,255,255,.15)':''};
    transition:border-right 0.2s linear;
    ${({theme}) => theme.small`
        display:none;
    `}
`
const MenuWrapper = styled.div`
    padding:0 8px;
    padding-top:8px;
    width:100%; 
    box-sizing: border-box;
`

interface MenuIcoProps {
    icon: IconType;
    descript: string;
    link:string;
}
const MenuIcon = ({icon:Icon,descript,link}:MenuIcoProps) => {
    const location = useLocation();
    return(
        <Link to={link}>
            <IconWrapper $selectState={link === location.pathname}>
                <Icon/>
                <IconFont>{descript}</IconFont>
            </IconWrapper>
        </Link>
    )
}
export default function SmallSideBar(){
    const { isComponentsOpen } = useToggle();
    const isScrollTop = IsScrollTop();

    const isBorder = !isScrollTop || isComponentsOpen(PlayerPage);

    return(
        <Wrapper $isBorder={isBorder}>
            <MenuWrapper>
                <MenuIcon icon ={MdHomeFilled} descript='홈' link={"/"}/>
                <MenuIcon icon ={FaRegCompass} descript='둘러보기' link={"/explore"}/>
                <MenuIcon icon={ImFilePlay} descript='보관함' link={"library"}/>
            </MenuWrapper>
        </Wrapper>
    )
}