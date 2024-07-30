import { AlbumType } from "../../../types/APItypes";

import ContentWrapper from "../../Common/Wrappers/ContentWrapper";
import AlbumItem from "../../Common/Items/AlbumItem";

interface ContentProps {
    listTitle: string;
    songs: AlbumType[];
}
export default function Content({musicListData}:{musicListData:ContentProps}) {
    return(
        <ContentWrapper title={musicListData.listTitle} >
            {musicListData.songs.map((album,idx) => 
                <AlbumItem key={idx} albumData={album}/>
            )}
        </ContentWrapper>
    )
}