import styled from "styled-components"
import { IconType } from "react-icons";

const Wrapper = styled.div`
    display:flex;
    color:#fff;
    font-size:22px;
    padding:0 20px;
    height:48px;
    align-items:center;
    cursor:pointer;
    border-radius:8px;
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
}
function MenuIcon({icon:Icon,descript}:MenuIconProps){
    return(
        <Wrapper>
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