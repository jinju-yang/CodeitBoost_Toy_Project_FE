import styled from "styled-components";
import GlobalNav from "../components/GlobalNav.jsx";
import { Button_L } from "../components/Button";
import { InputPassword } from "../components/InputText";

const PasswordCheckPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h2`
  margin-top: 150px;
`;

export const GroupPasswordCheckPage = () => {
  return (
    <PasswordCheckPageContainer>
      <GlobalNav buttonValid={false} />
      <PageTitle>비공개 그룹</PageTitle>
      <div>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.</div>
      <InputPassword placeholder={"그룹 비밀번호를 입력해 주세요"} />
      <Button_L content={"제출하기"} />
    </PasswordCheckPageContainer>
  );
};

export const PrivatePassWordCheckPage = () => {
  return (
    <PasswordCheckPageContainer>
      <GlobalNav buttonValid={false} />
      <PageTitle>비공개 추억</PageTitle>
      <div>비공개 추억에 접근하기 위해 권한 확인이 필요합니다.</div>
      <InputPassword placeholder={"추억 비밀번호를 입력해 주세요"} />
      <Button_L content={"제출하기"} />
    </PasswordCheckPageContainer>
  );
};
