import styled from "styled-components";

const Wrapper = styled.div`
    font-size:12px;
    color:#aaa;
    margin:0 16px 0 8px;
    white-space:nowrap;
    ${({theme}) => theme.medium`
        visibility:hidden;
    `}
`
export default function TimeInfo({playTime}:{playTime:number}){
    const minute = Math.floor(playTime / 60).toString().padStart(2, '0');
    const second = (playTime % 60).toString().padStart(2, '0');
    return(
        <Wrapper>{`00:00/${minute}:${second}`}</Wrapper>
    )
}