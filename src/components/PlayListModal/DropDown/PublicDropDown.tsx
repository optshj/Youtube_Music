import styled from "styled-components";

import DropDownItem from "./DropDownItem";

const Wrapper = styled.div`
    position: fixed;
    top:60%;
    display:flex;
    flex-direction:column;
    box-sizing: border-box;
    padding:12px 0;
    background:#333;
    z-index:5;
`

function PublicDropDown(){
    return(
        <Wrapper>
            <DropDownItem/>
        </Wrapper>
    )
}
export default PublicDropDown;