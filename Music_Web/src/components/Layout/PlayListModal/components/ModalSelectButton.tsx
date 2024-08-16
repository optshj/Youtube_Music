import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

import { IoChevronDownSharp } from "react-icons/io5"

import DropDownMenu from "./DropDownMenu"
import DropDownState from "./DropDownState"

const UnderLine = styled.div`
    position: absolute;
    border-bottom: 1px solid #606060;
    width: 100%;
`
const UnderLineActive = styled.div`
    position: absolute;
    border-bottom: 2px solid #3ea6ff;
    width: 100%;
    transform: scaleX(0);
    transition: all 0.25s ease-in-out;
`
const UnderLineWrapper = styled.div`
    position: relative;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 185px;
    @media (max-width: 280px) {
        width: 100%;
    }
`
const Text = styled.div`
    color: #aaa;
    font-size: 12px;
    padding: 0 0 6px;
`
const DropDownBox = styled.div`
    display: flex;
    flex-direction: row;
    &:active {
        & + ${UnderLineWrapper} ${UnderLineActive} {
            transform: scaleX(1);
        }
    }
`
const ArrowFont = styled(IoChevronDownSharp)`
    color: #919191;
    top: 6px;
`

export default function ModalSelectButton() {
    const [openDropDown, setOpenDropDown] = useState(false)
    const [state, setState] = useState("public")
    const componentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (componentRef.current && !componentRef.current.contains(e.target as Node)) {
                setOpenDropDown(false)
            }
        }
        document.addEventListener("mousedown", onClickOutside)
        return () => {
            document.removeEventListener("mousedown", onClickOutside)
        }
    })

    return (
        <Wrapper ref={componentRef}>
            <Text>{"공개 범위 설정"}</Text>
            <DropDownBox onClick={() => setOpenDropDown(true)}>
                <DropDownState state={state} />
                <ArrowFont />
            </DropDownBox>

            <UnderLineWrapper>
                <UnderLine />
                <UnderLineActive />
            </UnderLineWrapper>

            {openDropDown && <DropDownMenu onClose={() => setOpenDropDown(false)} state={state} setState={setState} />}
        </Wrapper>
    )
}
