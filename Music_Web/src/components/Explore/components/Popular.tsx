import styled from "styled-components";

import { SongType } from "../../../types/APItypes";

import ContentWrapper from "./ContentWrapper";
import TransverseItem from "../../Common/Items/TransverseItem";

const Wrapper = styled.ul`
    padding:0;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(4,min-content);
    gap:16px;
    &:nth-child(-n+1):nth-child(-n+4){
        padding-left: 56px;
    }
`

export default function Popular({data}:{data:SongType[]}) {
    return(
        <ContentWrapper title={"인기"}>
            <Wrapper>
                {data.map((song,idx) => (
                    <TransverseItem key={idx} songData={song}/>
                ))}
            </Wrapper>
        </ContentWrapper>
    )
}