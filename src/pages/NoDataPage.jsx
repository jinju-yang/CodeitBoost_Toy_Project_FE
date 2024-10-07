import styled from "styled-components";
import { Button_L, Button_M } from "../components/Button";
import GlobalNav from "../components/GlobalNav.jsx";
import { NoGroup } from "../components/None";
import { PageTop } from "./PublicGroupPage";
import { PageContainer } from "./PublicGroupPage";

const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 180px;
  margin-top: 100px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 100px;
`

const NoDataPage = () => {
  return (
    <PageContainer>
      <GlobalNav />
      <PageTop />
      <NoDataContainer>
        <NoGroup />
      </NoDataContainer>
      <ButtonContainer>
        <Button_M content={"그룹 만들기"} />
      </ButtonContainer>
    </PageContainer>
  );
};

export default NoDataPage;
