import styled from "styled-components"
import { IconType } from "react-icons";

interface WrapperProps {
    $selectState?:boolean
}
const Wrapper = styled.div<WrapperProps>`
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
function MenuIcon({icon:Icon,descript,selectState,onClick}:MenuIconProps){
    return(
        <Wrapper onClick={onClick} $selectState={selectState}>
            <Icon/>

            <MenuIconFont>
                {descript}
            </MenuIconFont>
        </Wrapper>
    )
}
export default MenuIcon;