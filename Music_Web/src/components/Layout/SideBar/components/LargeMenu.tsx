import styled from "styled-components"
import { IconType } from "react-icons";

import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { ImFilePlay } from "react-icons/im";
import { useLocation,Link } from "react-router-dom";

const IconWrapper = styled.div<{$selectState?:boolean}>`
    display:flex;
    color:#fff;
    font-size:22px;
    padding:0 20px;
    height:48px;
    align-items:center;
    cursor:pointer;
    border-radius:8px;
    background-color:${(props) => (props.$selectState ? '#1d1d1d':'')};
    &:hover{
        background-color:#343434;
    }
`
const IconFont = styled.div`
    margin-left:20px;
    font-size:16px;
`
const Wrapper = styled.div`
    padding:0 8px;
    padding-top:8px;
    width:100%; 
    box-sizing: border-box;
`
const MenuUnderLine = styled.div`
    border-top:1px solid rgba(255,255,255,.15);
    margin:24px auto;
`

interface MenuIconProps {
    icon: IconType;
    descript: string;
    link:string
}
const MenuIcon = ({icon:Icon,descript,link}:MenuIconProps) => {
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
export default function LargeMenu(){
    return(
        <Wrapper>
            <MenuIcon icon ={MdHomeFilled} descript='홈' link={"/"}/>
            <MenuIcon icon ={FaRegCompass} descript='둘러보기' link={"/explore"}/>
            <MenuIcon icon={ImFilePlay} descript='보관함' link={"/library"}/>
            <MenuUnderLine/>
        </Wrapper>
    )
}