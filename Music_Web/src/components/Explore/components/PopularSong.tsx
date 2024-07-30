import { SongType } from "../../../types/APItypes";

import ContentWrapper from "../../Common/Wrappers/ContentWrapper";
import TransverseItem from "../../Common/Items/TransverseItem";

export default function PopularSong({data}:{data:SongType[]}){
    return(
        <ContentWrapper title={"인기곡"} moreButton={true} grid={true}>
            {data.map((song,idx) => 
                <TransverseItem key={idx} songData={song}/>
            )}
        </ContentWrapper>
    )
}