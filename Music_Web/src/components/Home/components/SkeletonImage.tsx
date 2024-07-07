import styled,{keyframes} from "styled-components"

const shimmer = keyframes`
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
`;

const SkeletonWrapper = styled.div`
    width: 160px;
    height:160px;
    position: relative;
    background: linear-gradient(
        120deg,
        #8d8d8d 30%,
        #ababab 38%,
        #ababab 40%,
        #8d8d8d 48%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite linear;
`

export default function SkeletonImage(){
    return(
        <SkeletonWrapper/>
    )
}