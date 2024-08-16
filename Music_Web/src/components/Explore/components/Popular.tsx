import { SongType } from "../../../types/APItypes"

import ContentWrapper from "../../Common/Wrappers/ContentWrapper"
import TransverseItem from "../../Common/Items/TransverseItem"

export default function Popular({ data }: { data: SongType[] }) {
    return (
        <ContentWrapper title={"인기"} grid moreButton>
            {data.map(song => (
                <TransverseItem songData={song} />
            ))}
        </ContentWrapper>
    )
}
