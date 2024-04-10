import styled from "styled-components"
import { IconType } from "react-icons";

const MenuIconForm = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:20px;
    padding:12px 0;
    color:#fff;
    cursor:pointer;
    border-radius:8px;
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
}
function MenuIcon({icon:Icon,descript}:MenuIconProps){
    return(
        <MenuIconForm>
            <Icon/>

            <MenuIconFont>
                {descript}
            </MenuIconFont>
        </MenuIconForm>
    )
}
export default MenuIcon;