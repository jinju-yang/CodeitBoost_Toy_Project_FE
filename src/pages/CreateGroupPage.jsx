import styled from "styled-components";
import { InputText, InputPassword } from "../components/InputText";
import InputImage from "../components/InputImage";
import InputBox from "../components/InputBox";
import Toggle from "../components/Toggle";
import InputTitle from "../components/InputTitle.jsx";
import GlobalNav from "../components/GlobalNav.jsx";
import { Button_L } from "../components/Button";

const CreateGroupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  margin-bottom: 20px;
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 68px;
`;

const CreateGroupPage = () => {
  return (
    <CreateGroupPageContainer>
      <GlobalNav buttonValid={false} />
      <h2>그룹 만들기</h2>
      <InputContainer>
        <InputText />
        <InputImage />
        <InputBox />
        <ToggleContainer>
          <InputTitle content={"그룹 공개 선택"} />
          <Toggle />
        </ToggleContainer>
        <InputPassword placeholder={"그룹 비밀번호를 생성해 주세요"} />
      </InputContainer>
      <ButtonContainer>
        {" "}
        <Button_L content={"만들기"} />
      </ButtonContainer>
    </CreateGroupPageContainer>
  );
};

export default CreateGroupPage;
