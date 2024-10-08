import { ReactElement } from "react"
import styled, { keyframes } from "styled-components"
import { useLocation } from "react-router-dom"

import { GoHome, GoHomeFill } from "react-icons/go"
import { FaRegCompass, FaCompass } from "react-icons/fa"
import { BsFileEarmarkMusic, BsFileEarmarkMusicFill } from "react-icons/bs"

import { useToggle } from "../../../../context/ToggleContext"

import SideBar from "../SideBar"
import LargePlayListMenu from "./LargePlayListMenu"
import LinkButton from "../../../Common/Buttons/LinkButton"

const IconWrapper = styled.div<{ $selectState?: boolean }>`
    display: flex;
    color: #fff;
    font-size: 22px;
    padding: 0 20px;
    height: 48px;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${props => (props.$selectState ? "#1d1d1d" : "")};
    &:hover {
        background-color: #343434;
    }
`
const IconFont = styled.div`
    margin-left: 20px;
    font-size: 16px;
`
const onShow = keyframes`
    from {
        transform:translate3d(-100%,0,0);
    }
    to{
        transform:translate3d(0,0,0);
    }
`
const Wrapper = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    padding-top: 66px;
    width: 240px;
    height: 100%;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    display: ${props => (props.$isOpen ? "inline-block" : "none")};
    ${({ theme }) => theme.medium`
        animation: ${onShow} 0.2s linear;
    `}
`
const MenuWrapper = styled.div`
    padding: 0 8px;
    padding-top: 8px;
    width: 100%;
    box-sizing: border-box;
`
const MenuUnderLine = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin: 24px auto;
`

interface MenuIcoProps {
    emptyIcon: ReactElement
    fillIcon: ReactElement
    descript: string
    link: string
}
const MenuIcon = ({ emptyIcon, fillIcon, descript, link }: MenuIcoProps) => {
    const location = useLocation()
    const isLocation = location.pathname === link
    return (
        <LinkButton to={link}>
            <IconWrapper $selectState={isLocation}>
                {isLocation ? fillIcon : emptyIcon}
                <IconFont>{descript}</IconFont>
            </IconWrapper>
        </LinkButton>
    )
}
export default function LargeSideBar() {
    const { isComponentsOpen } = useToggle()
    const isOpen = isComponentsOpen(SideBar)

    return (
        <Wrapper $isOpen={isOpen}>
            <MenuWrapper>
                <MenuIcon
                    emptyIcon={<GoHome />}
                    fillIcon={<GoHomeFill />}
                    descript={"홈"}
                    link={"/Youtube_Music_Web/"}
                />
                <MenuIcon
                    emptyIcon={<FaRegCompass />}
                    fillIcon={<FaCompass />}
                    descript={"둘러보기"}
                    link={"/Youtube_Music_Web/explore"}
                />
                <MenuIcon
                    emptyIcon={<BsFileEarmarkMusic />}
                    fillIcon={<BsFileEarmarkMusicFill />}
                    descript={"보관함"}
                    link={"/Youtube_Music_Web/library"}
                />
                <MenuUnderLine />
            </MenuWrapper>
            <LargePlayListMenu />
        </Wrapper>
    )
}
