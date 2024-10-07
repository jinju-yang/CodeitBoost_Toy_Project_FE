import { CardPrivate } from "../components/Card";
import GlobalNav from "../components/GlobalNav";
import More from "../components/More";
import { PrivateTabs } from "../components/Tabs";
import { CardContainer } from "./PublicGroupPage";
import { PageContainer, PageTop } from "./PublicGroupPage";
import Search from "../components/Search";
import DropDown from "../components/DropDown";

const PrivateGroupPage = () => {
  return (
    <PageContainer>
      <GlobalNav buttonValid={true} />
      <PageTop />
      <CardContainer>
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
        <CardPrivate /> <CardPrivate />
      </CardContainer>
      <More />
    </PageContainer>
  );
};

export default PrivateGroupPage;
