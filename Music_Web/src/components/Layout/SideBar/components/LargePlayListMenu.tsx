import {useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import LargeMakeList from "./LargeMakeList";
import PlayList from "./PlayList";

const Wrapper = styled.div`
    flex-direction:column;
    padding:0 4px;
`
const ListWrapper = styled.div`
    padding:0 4px;
`

interface playList{
    _id:string,
    title:string,
    owner:string,
    url:string
}
export default function LargePlayListMenu(){
    const [playList, setPlayList] = useState<playList[]>([])

    useEffect(()=>{
        const fetchPlayList = async () => {
            axios.get("http://localhost:4000/api/playlists")
            .then((res)=>{
                setPlayList(res.data)
            })
            .catch((e)=>{
                console.error(e)
            })
        }
        fetchPlayList();
    },[])

    return(
        <Wrapper>
            <LargeMakeList/>

            <ListWrapper>
                {playList.map((list)=>{
                    return <PlayList key={list._id} title={list.title} owner={list.owner}/>;
                })}
            </ListWrapper>
        </Wrapper>
    )
}