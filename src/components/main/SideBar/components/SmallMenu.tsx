import styled from "styled-components"
import { IconType } from "react-icons";

import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { ImFilePlay } from "react-icons/im";

import { Link,useLocation } from "react-router-dom";

const IconWrapper = styled.div<{$selectState?:boolean}>`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:20px;
    padding:12px 0;
    color:#fff;
    cursor:pointer;
    border-radius:8px;
    background-color:${(props) => (props.$selectState ? '#1d1d1d':'')};
    &:hover{
        background-color:#343434;
    }
`
const IconFont = styled.div`
    font-size:10px;
`
interface MenuIconProps {
    icon: IconType;
    descript: string;
    link:string;
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

const Wrapper = styled.div`
    padding:0 8px;
    padding-top:8px;
    width:100%; 
    box-sizing: border-box;
`

export default function SmallMenu(){
    return(
            <Wrapper>
                <MenuIcon icon ={MdHomeFilled} descript='홈' link={"/"}/>
                <MenuIcon icon ={FaRegCompass} descript='둘러보기' link={"/explore"}/>
                <MenuIcon icon={ImFilePlay} descript='보관함' link={"libray"}/>
            </Wrapper>
    )
}