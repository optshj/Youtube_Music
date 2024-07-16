export interface SongType{
    title: string;
    artist: string;
    album: string;
    releaseDate: string;
    playTime:number;
}

export interface playListType{
    _id:string,
    title:string,
    owner:string,
    url:string
}