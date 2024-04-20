import styled from "styled-components"
import { IconType } from "react-icons";

interface WrapperProps {
    $selectState:boolean
}
const Wrapper = styled.div<WrapperProps>`
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
const IconWrapper = styled.div`
    margin-right:20px;
`
const MenuIconFont = styled.div`
    font-size:16px;
`

interface MenuIconProps {
    icon: IconType;
    descript: string;
    selectState: boolean;
    onClick:() => void;
}
function MenuIcon({icon:Icon,descript,selectState,onClick}:MenuIconProps){
    return(
        <Wrapper $selectState={selectState} onClick={onClick}>
            <IconWrapper>
                <Icon/>
            </IconWrapper>

            <MenuIconFont>
                {descript}
            </MenuIconFont>
        </Wrapper>
    )
}
export default MenuIcon;