import { useRef } from "react"
import styled from "styled-components"
import useRipple from "../../../hooks/useRipple"

interface WrapperProps {
    $isSelect:boolean;
    $isUp:boolean;
}
const Wrapper = styled.div<WrapperProps >`
    color:${(props) => (props.$isSelect ? '#fff':'rgba(255,255,255,.7)')};
    height:100%;
    position:relative;
    cursor:pointer;
    display:flex;
    padding:0 12px;
    align-items:center;
    justify-content:center;
    flex:1 1 auto;
    white-space: nowrap;
    overflow:hidden;
    border-bottom:${(props) => (props.$isSelect ? '1px solid #fff':'none')};
    ${({theme}) => theme.small`
        border:${(props:WrapperProps) => (props.$isUp ? '':'none')};
    `}
`

interface HeaderContentProps {
    isSelect:boolean;
    isUp:boolean;
    onClick:()=>void;
    title:string;
}
function HeaderContent({isSelect,isUp,onClick,title}:HeaderContentProps){
    const contentRef = useRef<HTMLDivElement>(null);
    const ripples = useRipple(contentRef);

    return(
        <Wrapper $isSelect={isSelect} $isUp={isUp} onClick={onClick} ref={contentRef}>
            {title}
            {ripples}
        </Wrapper>
    )
}
export default HeaderContent;