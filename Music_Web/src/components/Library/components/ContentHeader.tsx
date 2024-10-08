import { useState } from "react"
import styled from "styled-components"

import { MdArrowDropDown } from "react-icons/md"

import { useToggle } from "../../../context/ToggleContext"

import DropDown from "./DropDown"

const Wrapper = styled.div`
    margin: 26px auto 36px;
    display: flex;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.widths.xlarge};
    ${({ theme }) => theme.large` max-width:${theme.widths.large}`}
    ${({ theme }) => theme.medium` 
        max-width:${theme.widths.medium};
        flex-direction:column;
    `}
    ${({ theme }) => theme.small` max-width:${theme.widths.small};`}
`
const LeftWrapper = styled.div`
    display: flex;
    margin-right: 24px;
    ${({ theme }) => theme.medium`margin-bottom:20px;`}
    & > *:first-child {
        margin-left: 0;
    }
    & > *:last-child {
        margin-right: 0;
    }
`
const Item = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
    background-color: #1d1d1d;
    white-space: nowrap;
    cursor: pointer;
    padding: 0 12px;
    height: 32px;
    border-radius: 8px;
    margin: 6px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`
const RightWrapper = styled.div``
const EndItem = styled.button`
    color: #fff;
    font-size: 14px;
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    min-width: 164px;
    max-width: 272px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 8px 16px;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
`
const Arrow = styled(MdArrowDropDown)`
    width: 24px;
    height: 24px;
`
export default function ContentHeader() {
    const [selected, setSelected] = useState("최근 활동")

    const { toggleComponent } = useToggle()

    return (
        <Wrapper>
            <LeftWrapper>
                <Item>{"재생목록"}</Item>
                <Item>{"노래"}</Item>
                <Item>{"앨범"}</Item>
                <Item>{"아티스트"}</Item>
                <Item>{"팟캐스트"}</Item>
            </LeftWrapper>
            <RightWrapper onClick={() => toggleComponent(DropDown)}>
                <EndItem>
                    {selected}
                    <Arrow />
                </EndItem>
                <DropDown selected={selected} setSelected={setSelected} />
            </RightWrapper>
        </Wrapper>
    )
}
