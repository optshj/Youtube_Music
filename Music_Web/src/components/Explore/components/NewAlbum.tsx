import { AlbumType } from "../../../types/APItypes";

import ContentWrapper from "../../Common/Wrappers/ContentWrapper";
import AlbumItem from "../../Common/Items/AlbumItem";

export default function NewAlbum({data}:{data:AlbumType[]}) {
    return(
        <ContentWrapper title="새 앨범 및 싱글" moreButton={true}>
            {data.map((album,idx) => 
                <AlbumItem key={idx} albumData={album}/>
        )}
        </ContentWrapper>
    )
}