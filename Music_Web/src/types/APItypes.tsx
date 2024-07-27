export interface SongType{
    title: string;
    artist: string;
    album: string;
    releaseDate: string;
    playTime:number;
}

export interface PlayListType{
    _id:string,
    title:string,
    owner:string,
    url:string
}

export interface NewAlbumType{  
    title: string;
    artist: string;
    type: string;
    releaseDate: string;
}

export interface PopularSongType{
    title: string;
    artist: string;
    album: string;
    rank:number;
    fluctuation:number;
}