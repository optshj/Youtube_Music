import { ReactElement } from "react";
import styled from "styled-components";

import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GrConnect } from "react-icons/gr";

const Wrapper = styled.div`
    display: flex;
    width:100%;
    color: #fff;
    font-size: 14px;
`
const IconFont = styled.div`
    color: #aaa;
    font-size: 24px;
    padding-left: 4px;
`
const StateForm = styled.div`
    position: relative;
    left: 10px;
    top: 4px;
`

type StatusConfig = {
    [key: string]: { icon: ReactElement; text: string };
};
const statusConfig: StatusConfig = {
    'public': {
        icon: <IoEarthOutline/>,
        text: "공개"
    },
    'pratial': {
        icon: <GrConnect/>,
        text: "일부공개"
    },
    'private': {
        icon: <CiLock/>,
        text: "비공개"
    },
};

export default function PublicStatus({state}: { state: string }) {
    const { icon, text } = statusConfig[state];

    return (
        <Wrapper>
            <IconFont>{icon}</IconFont>
            <StateForm>{text}</StateForm>
        </Wrapper>
    );
}
