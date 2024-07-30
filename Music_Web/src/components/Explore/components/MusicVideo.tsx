import { VideoType } from "../../../types/APItypes";

import ContentWrapper from "../../Common/Wrappers/ContentWrapper";
import VideoItem from "../../Common/Items/VideoItem";

export default function MusicVideo({data}:{data:VideoType[]}){
    return(
        <ContentWrapper title={"새 뮤직 비디오"} moreButton={true}>
            {data.map((song,idx) => 
                <VideoItem key={idx} videoData={song}/>
            )}
        </ContentWrapper>
    )
}