import styled from "styled-components";

import { FaCirclePlay } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { usePlayer } from "../../context/PlayerContext";

const Wrapper = styled.div`
    width:160px;
    cursor:pointer;
`
const Details = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:8px;
`
const TitleWrapper = styled.div`
    overflow:hidden;
`
const Title = styled.div`
    color:#fff;
    font-size:14px;
    cursor:pointer;
    font-weight:500;
    line-height:1.3;
    &:hover{
        text-decoration:underline;
    }
`
const SubTitleWrapper = styled.div`
    margin-top:3px;
    align-items:center;
`
const SubTitle = styled.div`
    white-space:normal;
    color:rgba(255,255,255,0.7);
    font-size:14px;
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
    width: 160px;
    height: 160px;
    position: absolute;
`;
const ItemPlayButton = styled(FaCirclePlay)`
    position:absolute;
    right:40px;
    bottom:40px;
    font-size:32px;
    visibility:hidden;
    opacity:0.8;
    transform:translate(50%,50%);
    &:hover{
        font-size:40px;
        transition:font-size 0.2s linear;
        opacity:1;
    }
`
const ItemMenuButton = styled(HiOutlineDotsVertical)`
    transform:translate(50%,50%);
    color:#fff;
    font-size:20px;
    visibility:hidden;
`
const ImageWrapper = styled.div`
    position:relative;
    top:0;
    &:hover {
        ${ItemPlayButton}{
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
function Item(){
    const {open} = usePlayer();

    return(
        <Wrapper onClick={open}>
            <ImageWrapper>
                <ItemBackGround></ItemBackGround>
                <img src="https://via.placeholder.com/160x160/666.png" alt="Placeholder"/>
                <ItemPlayButton></ItemPlayButton>
                <ItemMenuWrapper>
                    <ItemMenuButton></ItemMenuButton>
                </ItemMenuWrapper>
            </ImageWrapper>
            <Details>
                <TitleWrapper>
                    <Title>
                        Lorem ipsum
                    </Title>
                </TitleWrapper>
                <SubTitleWrapper>
                    <SubTitle>
                        Lorem ipusm
                    </SubTitle>
                </SubTitleWrapper>
            </Details>
        </Wrapper>
    )
}
export default Item;