import styled from "styled-components";
import { Button_M } from "../components/Button";
import GlobalNav from "../components/GlobalNav";
import { NoGroup } from "../components/None";
import { PageTop } from "./PublicGroupPage";
import { PageContainer } from "./PublicGroupPage";

const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
  margin-top: 180px;
`;

const NoDataPage = () => {
  return (
    <PageContainer>
      <GlobalNav buttonValid={true} />
      <PageTop />
      <NoDataContainer>
        <NoGroup />
        <Button_M content={"그룹 만들기"} />
      </NoDataContainer>
    </PageContainer>
  );
};

export default NoDataPage;
