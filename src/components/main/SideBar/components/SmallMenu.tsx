import styled from "styled-components"
import { IconType } from "react-icons";

import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { ImFilePlay } from "react-icons/im";


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
const MenuIconFont = styled.div`
    font-size:10px;
`
interface MenuIconProps {
    icon: IconType;
    descript: string;
    selectState?: boolean;
    onClick?:() => void;
}
const MenuIcon = ({icon:Icon,descript,selectState,onClick}:MenuIconProps) => {
    return(
        <IconWrapper onClick={onClick} $selectState={selectState}>
            <Icon/>
            <MenuIconFont>{descript}</MenuIconFont>
        </IconWrapper>
    )
}


const Wrapper = styled.div`
    padding:0 8px;
    padding-top:8px;
    width:100%; 
    box-sizing: border-box;
`

interface MenuProps {
    selectState:number;
    setSelectState:React.Dispatch<React.SetStateAction<number>>
}
export default function SmallMenu({selectState,setSelectState}:MenuProps){
    return(
            <Wrapper>
                <MenuIcon icon ={MdHomeFilled} descript='홈' selectState={selectState===0} onClick={() => setSelectState(0)}/>
                <MenuIcon icon ={FaRegCompass} descript='둘러보기' selectState={selectState===1} onClick={() => setSelectState(1)}/>
                <MenuIcon icon={ImFilePlay} descript='보관함' selectState={selectState===2} onClick={() => setSelectState(2)}/>
            </Wrapper>
    )
}