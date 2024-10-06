// pages/Test.jsx
import Badge from "../components/Badge.jsx";
import Toggle from "../components/Toggle";
import { Button_L, Button_M } from "../components/Button";
import Like from "../components/Like";
import DropDown from "../components/DropDown";
import GlobalNav from "../components/GlobalNav";
import Search from "../components/Search";
import More from "../components/More";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import { InputText, InputPassword } from "../components/InputText";
import InputImage from "../components/InputImage";
import InputTag from "../components/InputTag";
import InputBox from "../components/InputBox";
import { CardIllust, CardPrivate, CardPublic } from "../components/Card";
import { PageTop } from "./PublicGroupPage";
import { PublicTabs, PrivateTabs } from "../components/Tabs";
import { NoGroup, NoMemory } from "../components/None";

const Test = () => {
  return (
    <>
      <GlobalNav />
      <GlobalNav buttonValid={true} />
      <Badge content={"👾 7일 연속 추억 등록"} />
      <Badge content={"💖 게시글 공감 1만 개 이상 받기"} />
      <Badge content={"🌼 그룹 공감 1만 개 이상 받기"} />
      <Toggle />
      <Button_L content={"만들기"} />
      <Button_M content={"그룹 만들기"} />
      <PublicTabs />
      <PrivateTabs />
      <Like />
      <DropDown />
      <Search />
      <More />
      <Pagination />
      <Modal
        modalTitle={"그룹 만들기 성공"}
        modalContent={"그룹이 성공적으로 등록되었습니다."}
      />
      <InputText />
      <InputPassword />
      <InputImage />
      <InputTag />
      <InputBox />
      <CardPublic />
      <CardIllust />
      <CardPrivate />
      <PageTop />
      <NoGroup />
      <NoMemory />
    </>
  );
};

export default Test;
