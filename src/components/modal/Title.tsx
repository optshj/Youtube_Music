import styled from "styled-components";
const TitleForm = styled.h2`
    font-family:YouTube Sans, Roboto,Noto Naskh Arabic UI,Arial,sans-serif;
    padding:24px 24px 0;
    font-size:20px;
    line-height:1.3;
    color:#fff;
    margin:0;
`
function Title(){
    return(
        <>
            <TitleForm>
                새 재생목록
            </TitleForm>
        </>
    )
}

export default Title;