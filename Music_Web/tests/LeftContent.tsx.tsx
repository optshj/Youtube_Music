import { render, screen, fireEvent } from "@testing-library/react"

import { useToggle } from "../src/context/ToggleContext"
import LeftContent from "../src/components/Layout/Header/components/LeftContent"

// `useToggle`를 mock으로 설정
jest.mock("@src/context/ToggleContext", () => ({
    useToggle: jest.fn()
}))

describe("LeftContent", () => {
    it("should call toggleComponent when Menu is clicked", () => {
        // useToggle 훅의 모킹 함수 설정
        const mockToggleComponent = jest.fn()
        ;(useToggle as jest.Mock).mockReturnValue({ toggleComponent: mockToggleComponent })

        // 컴포넌트 렌더링
        render(<LeftContent />)

        // Menu 아이콘 클릭
        const menuIcon = screen.getByRole("button") // Menu 아이콘이 버튼 역할을 한다고 가정
        fireEvent.click(menuIcon)

        // toggleComponent 함수가 호출되었는지 확인
        expect(mockToggleComponent).toHaveBeenCalledWith(expect.anything()) // SideBar 컴포넌트를 확인할 수 있다면, 구체적인 값을 확인할 수 있음
    })
})
