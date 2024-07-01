import styled from "styled-components";

import { MdPlayArrow } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { usePlayerbar } from "../../../../context/PlayerbarContext";

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

export default function Item(){
    const {open} = usePlayerbar();

    return(
        <Wrapper onClick={open}>
            <ImageWrapper>
                <ItemBackGround/>
                <img src="https://via.placeholder.com/160x160/666.png" alt="Placeholder"/>

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
}