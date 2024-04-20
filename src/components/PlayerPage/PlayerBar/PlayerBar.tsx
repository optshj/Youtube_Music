import styled from 'styled-components';

interface WrapperProps {
    $isUp:boolean;
}
const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: row;
    position:absolute;
    width:100%;
    visibility: hidden;
    padding-top:8px;
    ${({theme}) => theme.small`
        visibility: ${({$isUp}:WrapperProps) => $isUp ? 'visible' : 'hidden'};
    `}
`
const LeftContent = styled.div`
    margin-left:16px;
`
const CenterContent = styled.div`
    margin-left:16px;
    justify-content: flex-start;
    display:flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin: 0 0 4px;
`
const Artist = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgba(255,255,255,0.7);
`
const RightContent = styled.div`
    margin: 0 16px;
`

interface PlayerBarProps {
    isUp:boolean;
    onClick?:() => void;
}
function PlayerBar({isUp,onClick}:PlayerBarProps) {
    return (
        <Wrapper $isUp={isUp} onClick={onClick}>
            <LeftContent>
                <img src="https://via.placeholder.com/40x40/666.png" alt="Placeholder"/>
            </LeftContent>

            <CenterContent>
                <Title>Lorem ipsum</Title>
                <Artist>Lorem ipsum</Artist>
            </CenterContent>

            <RightContent>

            </RightContent>
        </Wrapper>
    );
};

export default PlayerBar;