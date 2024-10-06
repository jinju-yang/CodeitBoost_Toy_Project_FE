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
      <Tab isPublic={true} isActive={true} onClick={handlePrivateClick}/>
      <Tab />
    </TabsContainer>
  );
};

export const PrivateTabs = ({ isActive }) => {
  return (
    <TabsContainer>
      <Tab isPublic={true} />
      <Tab isActive={true} onClick={handlePrivateClick} />
    </TabsContainer>
  );
};
