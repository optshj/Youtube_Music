export interface SongType{
    title: string;
    artist: string;
    album: string;
    releaseDate: string;
    playTime:number;
    hit?:number;
    rank?:number;
    fluctuation?:number;
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

export interface GenreType{
    title: string;
    color: string;
}