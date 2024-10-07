import { useState } from "react";
import styled from "styled-components";
import InputTitle from "./InputTitle.jsx";

const InputTextContainer = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 45px;
  padding: 13px 20px;
  background: #fafafa;
  border: 1px solid ${(props) => (props.isValid ? "#dddddd" : "red")};
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: ${(props) => (props.isValid ? "#000000" : "red")};
  }
`;

const InputPasswordContainer = styled(InputTextContainer)`
  border: 1px solid #dddddd;
  &:focus {
    border-color: #000000;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WarningMessage = styled.div`
  color: red;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const InputText = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  // 특수문자 허용: !@#$%^_ 만 허용하는 정규식
  const specialCharRegex = /^[a-zA-Z0-9가-힣\s!@#$%^_]*$/;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // 입력 값이 있을 때만 유효성 검사 (빈 값일 때는 경고 메시지 표시 안 함)
    if (value === "") {
      setIsValid(true);
    } else {
      setIsValid(specialCharRegex.test(value));
    }
  };

  return (
    <InputContainer>
      <InputTitle content={"그룹명"} />
      <InputTextContainer
        placeholder="그룹명을 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
        isValid={isValid}
      />
      {!isValid && (
        <WarningMessage show={!isValid && inputValue !== ""}>
          특수문자는 !@#$%^_만 사용하실 수 있습니다.
        </WarningMessage>
      )}
    </InputContainer>
  );
};

export const InputPassword = ({ placeholder }) => {
  return (
    <InputContainer>
      <InputTitle content={"비밀번호 생성"} />
      <InputPasswordContainer type="password" placeholder={placeholder} />
    </InputContainer>
  );
};
