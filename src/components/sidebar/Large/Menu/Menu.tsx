import styled from "styled-components"

import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { ImFilePlay } from "react-icons/im";

import MenuIcon from './MenuIcon';

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
function Menu({selectState,setSelectState}:MenuProps){
    return(
        <Wrapper>
            <MenuIcon icon ={MdHomeFilled} descript='홈' selectState={selectState===0} onClick={() => setSelectState(0)}/>
            <MenuIcon icon ={FaRegCompass} descript='둘러보기' selectState={selectState===1} onClick={() => setSelectState(1)}/>
            <MenuIcon icon={ImFilePlay} descript='보관함' selectState={selectState===2} onClick={() => setSelectState(2)}/>
            <MenuUnderLine/>
        </Wrapper>

    )
}
export default Menu;