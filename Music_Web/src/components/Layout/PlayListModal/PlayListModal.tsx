import Modal from 'react-modal';
import styled,{keyframes} from 'styled-components';
import axios from 'axios';

import { useToggle } from '../../../context/ToggleContext';

import ModalInput from './components/ModalInput';
import ModalButton from './components/ModalButton';


const ModalStyles:ReactModal.Styles = {
    overlay: {
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 4,
        backgroundColor:"rgba(0, 0, 0, 0.8)",
    },
    content: {
        position: "fixed",
        top:"50%",
        left:"50%",
        height:"400px",
        border: "1px solid rgba(255,255,255,0.1)",
        backgroundColor: "#212121",
        borderRadius: 3,
        zIndex: 3,
        overflow:'visible',
        transform:"translate(-50%,-50%)",
    }
};
const FadeIn = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
`
const ResponsiveModal = styled(Modal)`
    animation: ${FadeIn} .15s linear;
    width:640px;
    ${({theme}) => theme.large`
        width:560px;
    `}
    ${({theme}) => theme.medium`
        width:480px;
    `}
    ${({theme}) => theme.small`
        width:calc(100vw - 48px);
    `}
`
const Title = styled.h2`
    padding:24px 24px 0;
    font-size:22px;
    line-height:1.3;
    color:#fff;
    margin:0;
`

export default function PlayLisModal(){
    const { closeComponent,isComponentsOpen } = useToggle();

    const isModalOpen = isComponentsOpen(PlayLisModal);

    const submitPlayList = () => {
        axios.post("http://localhost:4000/api/playlists",
        {
            title: "test",
            owner: "test",
            url: "test"
        }).catch(e => {
            console.error(e)
        })
    }

    return(
        <ResponsiveModal isOpen={isModalOpen} onRequestClose={() => closeComponent(PlayLisModal)} style={ModalStyles}>
            <Title>새 재생목록</Title>
            <ModalInput isOpen={isModalOpen}/>
            <ModalButton onSubmit={submitPlayList}/>
        </ResponsiveModal>
    )
}