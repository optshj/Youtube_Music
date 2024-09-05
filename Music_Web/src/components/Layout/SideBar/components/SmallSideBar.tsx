import { ReactElement } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

import { GoHome, GoHomeFill } from "react-icons/go"
import { FaRegCompass, FaCompass } from "react-icons/fa"
import { BsFileEarmarkMusic, BsFileEarmarkMusicFill } from "react-icons/bs"

import { IsScrollTop } from "../../../../context/ScrollContext"
import { useToggle } from "../../../../context/ToggleContext"

import PlayerPage from "../../PlayerPage/PlayerPage"
import LinkButton from "../../../Common/Buttons/LinkButton"

const IconWrapper = styled.div<{ $selectState?: boolean }>`
    display: flex;
    color: #fff;
    font-size: 22px;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${props => (props.$selectState ? "#1d1d1d" : "")};
    &:hover {
        background-color: #343434;
    }
`
const IconFont = styled.div`
    margin-top: 4px;
    font-size: 10px;
`
const Wrapper = styled.div<{ $isBorder: boolean }>`
    position: absolute;
    padding-top: 66px;
    height: 100%;
    width: 72px;
    border-right: ${props => (props.$isBorder ? "1px solid rgba(255,255,255,.15)" : "1px solid transparent")};
    transition: border-right 0.2s linear;
    ${({ theme }) => theme.small`
        display:none;
    `}
`
const MenuWrapper = styled.div`
    padding: 0 8px;
    padding-top: 8px;
    width: 100%;
    box-sizing: border-box;
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
export default function SmallSideBar() {
    const { isComponentsOpen } = useToggle()
    const isScrollTop = IsScrollTop()
    const isBorder = !isScrollTop || isComponentsOpen(PlayerPage)

    return (
        <Wrapper $isBorder={isBorder}>
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
            </MenuWrapper>
        </Wrapper>
    )
}
