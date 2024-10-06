import styled from "styled-components";
import { CardIllust, CardPublic } from "../components/Card";
import DropDown from "../components/DropDown";
import GlobalNav from "../components/GlobalNav";
import More from "../components/More";
import Search from "../components/Search";
import { PublicTabs } from "../components/Tabs";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 90%;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
  position: relative; /* DropDown 위치를 부모 기준으로 설정 */
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
`;

export const PageTop = () => {
  return (
    <PageTopContainer>
      <PublicTabs />
      <Search />
      <DropDown />
    </PageTopContainer>
  );
};

const PublicGroupPage = () => {
  return (
    <PageContainer>
      <GlobalNav buttonValid={true} />
      <PageTop />
      <CardContainer>
        <CardPublic />
        <CardIllust />
        <CardPublic />
        <CardIllust />
        <CardPublic />
        <CardPublic />
        <CardPublic />
        <CardIllust />
        <CardIllust />
        <CardPublic />
        <CardIllust />
        <CardPublic />
      </CardContainer>
      <More />
    </PageContainer>
  );
};

export default PublicGroupPage;
