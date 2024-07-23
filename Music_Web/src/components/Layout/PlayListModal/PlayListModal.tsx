import { useState,useEffect,useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useToggle } from '../../../context/ToggleContext';
import { usePlayList } from '../../../context/PlayListContext';

import ModalSelectButton from './components/ModalSelectButton';
import ModalButton from './components/ModalButton';
import Modal from '../../Common/Modal/Modal';

const ModalWrapper = styled.div`
    width:640px;
    height:400px;
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
const UnderLineActive = styled.div`
    position:absolute;
    border-bottom:2px solid #3ea6ff;
    width:100%;
    transform:scaleX(0);
    transition:all 0.25s ease-in-out;
`
const UnderLine = styled.div`
    position:absolute;
    border-bottom:1px solid #606060;
    width:100%;
`
const UnderLineWrapper = styled.div`
    position:relative;
`
const Input = styled.input`
    margin:0;
    outline:none;
    background:transparent;
    width:100%;
    box-shadow:none;
    border:none;
    padding:0;
    caret-color:#3ea6ff;
    color:white;
    &:focus{
        & + ${UnderLineWrapper} ${UnderLineActive}{
            transform:scaleX(1);
        }
    }
`
const Wrapper = styled.div`
    padding:32px 24px;
`
const Label = styled.label<{$isWrite:boolean}>`
    font-size:14px;
    color:rgba(255,255,255,0.7);
    line-height: 0.5;
    position:absolute;
    width:100%;
    cursor:text;
    transition:all 0.25s ease-in-out;
    ${props => props.$isWrite && `
        transform:translateY(-20px);
        font-size:11px;
    `}
`
const TilteForm = styled.div`
    position:relative;
    margin-top:32px;
`
const ExplainForm = styled.div`
    margin:52px 0 34px;
`

export default function PlayLisModal(){
    const inputRef = useRef<HTMLInputElement>(null);
    const [title,setTitle] = useState<string>('');
    const [explain,setExplain] = useState<string>('');
    
    const { fetchPlayList } = usePlayList();
    const { closeComponent,isComponentsOpen } = useToggle();
    const isModalOpen = isComponentsOpen(PlayLisModal);

    useEffect (()=> {
        if (isModalOpen && inputRef.current){
            inputRef.current.focus();
        }
    },[isModalOpen])

    const submitPlayList = () => {
        axios.post("http://localhost:4000/api/playlists",
        {
            title: title,
            explain: explain,
            owner: "test",
            url: "test",
        }).catch(e => {
            console.error(e)
        })
        fetchPlayList();
        closeComponent(PlayLisModal);
        setTitle('');
        setExplain('');
    }

    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onChangeExplain = (e:React.ChangeEvent<HTMLInputElement>) => {
        setExplain(e.target.value);
    }

    return(
        <Modal isOpen={isModalOpen}>
            <ModalWrapper>
                <Title>새 재생목록</Title>

                <Wrapper>
                    <TilteForm>
                        <Label htmlFor="input-title" $isWrite={!!title}>제목</Label>
                        <Input type='text' id="input-title" value={title} onChange={onChangeTitle} ref={inputRef}/>
                        <UnderLineWrapper> 
                            <UnderLine/>
                            <UnderLineActive/>
                        </UnderLineWrapper>
                    </TilteForm>
                    
                    <ExplainForm>
                        <Label htmlFor="input-explain" $isWrite={!!explain}>설명</Label>
                        <Input type='text' id="input-explain" value={explain} onChange={onChangeExplain}/>
                        <UnderLineWrapper>
                            <UnderLine/>
                            <UnderLineActive/>
                        </UnderLineWrapper>
                    </ExplainForm>
                    <ModalSelectButton/>
                </Wrapper>
                
                <ModalButton onSubmit={submitPlayList}/>
            </ModalWrapper>
        </Modal>
    )
}