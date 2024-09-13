import React, { useState, createContext, useContext, useMemo } from "react"
import { SongType } from "../types/APItypes"

const SongDataValueContext = createContext<any>(null)
const SongDataActionContext = createContext<any>(null)

export default function SongDataProvider({ children }: { children: React.ReactNode }) {
    const [songData, setSongData] = useState<SongType | null>(null)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const currentMinute = Math.floor(currentTime / 60)
        .toString()
        .padStart(2, "0")
    const currentSecond = (currentTime % 60).toString().padStart(2, "0")
    const actions = useMemo(
        () => ({
            setSongData(data: SongType) {
                setSongData(data)
            },
            setCurrentTime(time: number) {
                setCurrentTime(Math.floor(time))
            }
        }),
        []
    )

    return (
        <SongDataValueContext.Provider value={{ songData, currentMinute, currentSecond }}>
            <SongDataActionContext.Provider value={actions}>{children}</SongDataActionContext.Provider>
        </SongDataValueContext.Provider>
    )
}
export function useSongData() {
    const { setSongData, setCurrentTime } = useContext(SongDataActionContext)
    const { songData, currentMinute, currentSecond } = useContext(SongDataValueContext)

    return { setSongData, setCurrentTime, songData, currentMinute, currentSecond }
}
