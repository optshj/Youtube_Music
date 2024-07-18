import { useRef } from "react"
import styled from "styled-components";

import useRipple from "../../../../hooks/useRipple"

interface HeaderContentWrapperProps {
    $isSelect:boolean;
    $isBottomBarUp:boolean;
}
const HeaderContentWrapper = styled.div<HeaderContentWrapperProps>`
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
    border-bottom:${props => props.$isSelect ? '1px solid #fff':'none'};
    ${({theme,$isBottomBarUp}) => theme.small`
        border:${$isBottomBarUp ? '':'none'};
    `}
`
const Wrapper = styled.div<{$isBottomBarUp:boolean}>`
    display:flex;
    height:48px;
    border-bottom:1px solid rgba(255,255,255,0.1);
    font-size:14px;
    ${({theme,$isBottomBarUp}) => theme.small`
        border:${$isBottomBarUp ? '':'none'};
    `}
`
const Contents = styled.div`
    display:flex;
    height:100%;
    flex:1 1 auto;
`

interface HeaderContentProps {
    $isSelect:boolean;
    $isBottomBarUp:boolean;
    onClick:()=>void;
    title:string;
}
const HeaderContent = ({$isSelect,$isBottomBarUp,onClick,title}:HeaderContentProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const ripples = useRipple(contentRef);

    return(
        <HeaderContentWrapper $isSelect={$isSelect} $isBottomBarUp={$isBottomBarUp} onClick={onClick} ref={contentRef}>
            {title}
            {ripples}
        </HeaderContentWrapper>
    )
}

interface SideHeaderProps {
    $isBottomBarUp:boolean;
    selectType:String;
    setSelectType:React.Dispatch<React.SetStateAction<String>>;
}
export default function SideHeader({ $isBottomBarUp,selectType,setSelectType }:SideHeaderProps){
    const handleClick = (type:String) => {
        setSelectType(type);
    }
    
    return(
        <Wrapper $isBottomBarUp={$isBottomBarUp}>
            <Contents>
                <HeaderContent $isSelect={selectType === 'NextTrack'} $isBottomBarUp={$isBottomBarUp} onClick={() => handleClick('NextTrack')} title={'다음 트랙'}></HeaderContent>
                <HeaderContent $isSelect={selectType ==='Lyrics'} $isBottomBarUp={$isBottomBarUp} onClick={() => handleClick("Lyrics")} title={'가사'}></HeaderContent>
                <HeaderContent $isSelect={selectType === 'Related'} $isBottomBarUp={$isBottomBarUp} onClick={() => handleClick("Related")} title={'관련 항목'}></HeaderContent>
            </Contents>
        </Wrapper>
    )
}