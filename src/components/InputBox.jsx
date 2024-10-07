import styled from "styled-components";
import InputTitle from "./InputTitle.jsx";
import { InputContainer } from "./InputImage";

const InputBoxContainer = styled.textarea`
  width: 400px;
  height: 120px; /* 높이 강제 설정 */
  border: 1px solid #dddddd;
  background-color: #fafafa;
  padding: 13px 20px;
  border-radius: 6px;
  outline: none;
  resize: none; /* 크기 조정 불가 */
  box-sizing: border-box; /* 패딩과 테두리를 포함한 크기 설정 */
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const InputBox = () => {
  return (
    <InputContainer>
      <InputTitle content={"그룹 소개"} />
      <InputBoxContainer placeholder="그룹을 소개해주세요" />
    </InputContainer>
  );
};

export default InputBox;
