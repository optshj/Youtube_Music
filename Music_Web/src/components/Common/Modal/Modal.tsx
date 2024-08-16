import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

const Outer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 4;
    &.modal-enter {
        opacity: 0;
    }
    &.modal-enter-active {
        opacity: 1;
        transition: opacity 0.3s;
    }
    &.modal-exit {
        opacity: 1;
    }
    &.modal-exit-active {
        opacity: 0;
        transition: opacity 0.3s;
    }
`
const Inner = styled.div`
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    transform: translate(-50%, -50%);
    background-color: #212121;
`

interface ModalProps {
    isOpen: boolean
    children: React.ReactNode
}
export default function Modal({ isOpen, children }: ModalProps) {
    return (
        <CSSTransition in={isOpen} timeout={300} classNames={"modal"} unmountOnExit>
            <Outer>
                <Inner>{children}</Inner>
            </Outer>
        </CSSTransition>
    )
}
