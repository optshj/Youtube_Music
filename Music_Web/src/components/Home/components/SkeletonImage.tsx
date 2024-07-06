import styled,{keyframes} from "styled-components"

const shimmer = keyframes`
    0% {
        background-position: -100% 0;
    }
    100% {
        background-position: 100% 0;
    }
`;

const SkeletonWrapper = styled.div`
    width: 160px;
    height:160px;
    position: relative;
    overflow: hidden;
    background: #2a2a2a;
    background: linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite linear;
`

export default function SkeletonImage(){
    return(
        <SkeletonWrapper>
        </SkeletonWrapper>
    )
}