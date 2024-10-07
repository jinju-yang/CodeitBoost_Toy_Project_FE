import styled from "styled-components";
import Tab from "./Tab";
import { useNavigate } from "react-router-dom";

const TabsContainer = styled.div`
  display: flex;
`;

export const PublicTabs = ({ isActive }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handlePrivateClick = () => {
    navigate("/private");
  };

  return (
    <TabsContainer>
      <Tab isPublic={true} isActive={true} />
      <Tab onClick={handlePrivateClick} />
    </TabsContainer>
  );
};

export const PrivateTabs = ({ isActive }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handlePublcClick = () => {
    navigate("/public");
  };

  return (
    <TabsContainer>
      <Tab isPublic={true}  onClick={handlePublcClick}/>
      <Tab isActive={true} />
    </TabsContainer>
  );
};
