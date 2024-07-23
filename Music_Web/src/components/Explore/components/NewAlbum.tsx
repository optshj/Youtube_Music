import ContentWrapper from "./ContentWrapper";
import NewAlbumItem from "./NewAlbumItem";

import { SongType } from "../../../types/APItypes";

interface ContentProps {
    listTitle: string;
    songs: SongType[];
}
export default function NewAlbum({musicListData}:{musicListData:ContentProps}) {
    return(
        <ContentWrapper title="새로 나온 앨범">
                {
                    musicListData.songs.map((item,index) => (
                        <NewAlbumItem key={index} songData={item}/>
                    ))
                }
        </ContentWrapper>
    )
}