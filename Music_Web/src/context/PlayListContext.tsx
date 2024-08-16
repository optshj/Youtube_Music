import { useState, createContext, useContext, useEffect, useCallback } from "react"
import { customAxios } from "../api/customAxios"

import { PlayListType } from "../types/APItypes"

const PlayListValueContext = createContext<PlayListType[]>([])
const PlayListActionContext = createContext<() => void>(() => {})

export default function PlayListProvider({ children }: { children: React.ReactNode }) {
    const [playList, setPlayList] = useState<PlayListType[]>([])

    const fetchPlayList = useCallback(async () => {
        try {
            const response = await customAxios.get("/api/playlists")
            setPlayList(response.data)
        } catch (e) {
            console.error(e)
        }
    }, [])

    useEffect(() => {
        fetchPlayList()
    }, [fetchPlayList])

    return (
        <PlayListValueContext.Provider value={playList}>
            <PlayListActionContext.Provider value={fetchPlayList}>{children}</PlayListActionContext.Provider>
        </PlayListValueContext.Provider>
    )
}
export function usePlayList() {
    const playList = useContext(PlayListValueContext)
    const fetchPlayList = useContext(PlayListActionContext)
    return { playList, fetchPlayList }
}
