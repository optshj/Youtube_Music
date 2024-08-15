export interface SongType {
    title: string
    artist: string
    album: string
    releaseDate: string
    playTime: number
    hit?: number
    rank?: number
    fluctuation?: number
}

export interface PlayListType {
    _id: string
    title: string
    owner: string
    url: string
}

export interface AlbumType {
    title: string
    artist: string
    type: string
    releaseDate: string
    playTime: number
    hit?: number
}

export interface VideoType {
    title: string
    artist: string
    releaseDate: string
    playTime: number
    hit: number
}

export interface GenreType {
    title: string
    color: string
}
