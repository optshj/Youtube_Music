import styled from "styled-components";
import { IconType } from "react-icons";

import { SelectStatus } from "../../../../context/SelecPublicContext";

import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GrConnect } from "react-icons/gr";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
`;

const IconFont = styled.div`
    color: #aaa;
    font-size: 24px;
    padding-left: 4px;
`;

const StateForm = styled.div`
    position: relative;
    left: 10px;
    top: 4px;
`;

type StatusConfig = {
    [key: number]: { icon: IconType; text: string };
};

const statusConfig: StatusConfig = {
    0: {
        icon: IoEarthOutline,
        text: "공개",
    },
    1: {
        icon: GrConnect,
        text: "일부공개",
    },
    2: {
        icon: CiLock,
        text: "비공개",
    },
};

export default function PublicStatus() {
    const selectStatus = SelectStatus();
    const { icon: Icon, text } = statusConfig[selectStatus];

    return (
        <Wrapper>
            <IconFont>
                <Icon />
            </IconFont>
            <StateForm>{text}</StateForm>
        </Wrapper>
    );
}
