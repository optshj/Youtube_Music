import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { MdPlayArrow } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { usePlayerbar } from "../../../context/PlayerbarContext";
import { set } from "lodash";
import SkeletonImage from "./SkeletonImage";

const Wrapper = styled.div`
    width:160px;
    cursor:pointer;
`
const Details = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:8px;
`
const Title = styled.div`
    color:#fff;
    cursor:pointer;
    font-size:14px;
    font-weight:500;
    line-height:1.3;
    &:hover{
        text-decoration:underline;
    }
`
const SubTitle = styled.div`
    color:rgba(255,255,255,0.7);
    font-size:14px;
    white-space:normal;
    margin-top:3px;
`
const ItemMenuWrapper = styled.div`
    position:absolute;
    border-radius:50%;
    width:40px;
    height:40px;
    top:8px;
    right:4px;
    &:hover{
        background-color:rgba(255,255,255,0.2);
    }
`
const ItemBackGround = styled.div`
    position: absolute;
    width: 160px;
    height: 160px;
`;
const ItemPlayButtonWrapper = styled.div`
    position:absolute;
    visibility:hidden;
    right:20px;
    bottom:20px;
    width:32px;
    height:32px;
    background-color:#090909;
    opacity:0.7;
    border-radius:50%;
    &:hover{
        transform:scale(1.3);
        transition:transform 0.2s linear;
        opacity:1;
    }
`
const ItemPlayButton = styled(MdPlayArrow)`
    font-size:32px;
    color:#fff;
`
const ItemMenuButton = styled(HiOutlineDotsVertical)`
    visibility:hidden;
    transform:translate(50%,50%);
    font-size:20px;
    color:#fff;
`
const ImageWrapper = styled.div`
    position:relative;
    top:0;
    &:hover {
        ${ItemPlayButtonWrapper}{
            visibility:visible;
        }
        ${ItemMenuButton}{
            visibility:visible;
        }
        ${ItemBackGround}{
            background: linear-gradient(rgba(0, 0, 0, 0.502), rgba(0, 0, 0, 0.000), rgba(0, 0, 0, 0.000));
        }
    }
`
async function fetchImage(prompt: string, negativePrompt?: string) {
    const url = 'https://api.kakaobrain.com/v2/inference/karlo/t2i';
    const headers = {
        'Authorization': `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
        'Content-Type': 'application/json'
    };
    const data = {
        version: "v2.1",
        prompt: prompt,
        negative_prompt: negativePrompt,
        height: 768,
        width: 768,
        image_quality:20
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data
    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
}


export default React.memo(function Item(){
    const {open} = usePlayerbar();
    const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const prompt = "the forest in the raining";
    const negativePrompt = "";
    useEffect(() => {
        const generateAndShowImage = async () => {
            setLoading(true);
            try {
                const response = await fetchImage(prompt, negativePrompt);

                if (response.images.length > 0) {
                    const imageUrl = response.images[0].image;
                    setImageSrc(imageUrl);
                } else {
                    console.error('No images returned from the API');
                }
            } catch (error) {
                console.error('Error generating or showing image:', error);
            }
            setLoading(false);
        };
        generateAndShowImage();
    }, [prompt, negativePrompt]);

    return(
        <Wrapper onClick={open}>
            <ImageWrapper>
                <ItemBackGround/>
                {loading ? <SkeletonImage/> : <img src={imageSrc} alt={prompt} width={160} height={160}/>}

                <ItemPlayButtonWrapper>
                    <ItemPlayButton/>
                </ItemPlayButtonWrapper>
                <ItemMenuWrapper>
                    <ItemMenuButton/>
                </ItemMenuWrapper>
            </ImageWrapper>

            <Details>
                <Title>Lorem ipsum</Title>
                <SubTitle>Lorem ipusm</SubTitle>
            </Details>
        </Wrapper>
    )
})