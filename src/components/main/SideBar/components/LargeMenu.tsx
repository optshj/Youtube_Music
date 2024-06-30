import styled from "styled-components"
import { IconType } from "react-icons";

import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { ImFilePlay } from "react-icons/im";


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
const IconMargin = styled.div`
    margin-right:20px;
`
const IconFont = styled.div`
    font-size:16px;
`

interface MenuIconProps {
    icon: IconType;
    descript: string;
    selectState: boolean;
    onClick:() => void;
}
const MenuIcon = ({icon:Icon,descript,selectState,onClick}:MenuIconProps) => {
    return(
        <IconWrapper $selectState={selectState} onClick={onClick}>
            <IconMargin>
                <Icon/>
            </IconMargin>
            <IconFont>{descript}</IconFont>
        </IconWrapper>
    )
}


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

interface MenuProps {
    selectState:number;
    setSelectState:React.Dispatch<React.SetStateAction<number>>
}
export default function LargeMenu({selectState,setSelectState}:MenuProps){
    return(
        <Wrapper>
            <MenuIcon icon ={MdHomeFilled} descript='홈' selectState={selectState===0} onClick={() => setSelectState(0)}/>
            <MenuIcon icon ={FaRegCompass} descript='둘러보기' selectState={selectState===1} onClick={() => setSelectState(1)}/>
            <MenuIcon icon={ImFilePlay} descript='보관함' selectState={selectState===2} onClick={() => setSelectState(2)}/>
            <MenuUnderLine/>
        </Wrapper>

    )
}