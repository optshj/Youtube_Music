import Modal from 'react-modal';
import ReactModal from "react-modal";
import styled,{keyframes} from 'styled-components';

import { IsModalOpen } from "../context/ModalContext";
import { useModal } from "../context/ModalContext";

import Title from "./Title";
import Content from "./Content";


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
        display: "block",
        position: "fixed",
        height:"400px",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.4)",
        backgroundColor: "#212121",
        borderRadius: 3,
        zIndex: 3,
        padding:"0",
        overflow:'visible',
        transform:"translate(-50%,-50%)",
        top:"50%",
        left:"50%",
        outline:'none'
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
    @media (min-width: 1364px){
        width:640px;
    }
    @media (min-width: 936px) and (max-width: 1363px){
        width:560px;
    }
    @media (min-width: 616px) and (max-width: 935px){
        width:480px;
    }
    @media (max-width:615px){
    width:calc(100vw - 48px);
}
`
function MakePlayListModal(){
    const isOpen = IsModalOpen();
    const {close} = useModal();

    return(
        <>
            <ResponsiveModal isOpen={isOpen} onRequestClose={close} style={ModalStyles}>
                    <Title></Title>
                    <Content></Content>
            </ResponsiveModal>
        </>
    )
}

export default MakePlayListModal;