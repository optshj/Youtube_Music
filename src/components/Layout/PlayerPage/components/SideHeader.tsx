import styled from "styled-components";

import HeaderContent from "./MusicListHeaderContent";

interface WrapperProps {
    $isUp:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    display:flex;
    height:48px;
    border-bottom:1px solid rgba(255,255,255,0.1);
    font-size:14px;
    ${({theme}) => theme.small`
        border:${(props:WrapperProps) => (props.$isUp ? '':'none')};
    `}
`
const TabContainer = styled.div`
    display:flex;
    height:100%;
    flex:1 1 auto;
`
    
interface SideHeaderProps {
    isUp:boolean;
    selectType:String;
    setSelectType:React.Dispatch<React.SetStateAction<String>>;
}
export default function SideHeader({ isUp,selectType,setSelectType }:SideHeaderProps){
    const handleClick = (type:String) => {
        setSelectType(type);
    }
    
    return(
        <Wrapper $isUp={isUp}>
            <TabContainer>
                <HeaderContent isSelect={selectType === 'NextTrack'} isUp={isUp} onClick={() => handleClick('NextTrack')} title={'다음 트랙'}></HeaderContent>
                <HeaderContent isSelect={selectType ==='Lyrics'} isUp={isUp} onClick={() => handleClick("Lyrics")} title={'가사'}></HeaderContent>
                <HeaderContent isSelect={selectType === 'Related'} isUp={isUp} onClick={() => handleClick("Related")} title={'관련 항목'}></HeaderContent>
            </TabContainer>
        </Wrapper>
    )
}