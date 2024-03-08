import React from "react";
import styled from "styled-components";
import Modal from 'react-modal';

import { IsModalOpen } from "../context/ModalContext";

import Title from "./Title";
import Content from "./Content";


const ModalForm = styled.div`
    display:block;
    position:fixed;
    width:560px;

    border: 1px solid rgba(255,255,255,0.1);
    box-shadow:0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.4);
    background-color:#212121;
    border-radius:3px;
`
function MakePlayListModal(){
    const isOpen = IsModalOpen();
    return(
        <>
            <Modal isOpen={isOpen}>
                <ModalForm>
                    <Title></Title>
                    <Content></Content>
                </ModalForm>
            </Modal>
        </>
    )
}

export default MakePlayListModal;