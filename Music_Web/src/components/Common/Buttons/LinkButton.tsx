import React from "react"
import { Link } from "react-router-dom"
import { useToggle } from "../../../context/ToggleContext"
import PlayerPage from "../../Layout/PlayerPage/PlayerPage"

interface LinkButtonProps {
    to: string
    children: React.ReactNode
}
/**
 * Link 대신 사용하는 컴포넌트
 * 페이지 이동시 일부 컴포넌트를 닫게함
 */
export default function LinkButton({ to, children }: LinkButtonProps) {
    const { closeComponent } = useToggle()

    return (
        <Link to={to} onClick={() => closeComponent(PlayerPage)}>
            {children}
        </Link>
    )
}
