import styled from "styled-components";
import { Button_M } from "./Button";
import logo from "../../public/logo.svg";

const GlobalNavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 493px;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const LogoContainer = styled.img`
  margin-left: 910px;
`;

const ButtonContainer = styled.div`
  margin-right: 180px;
`;

const GlobalNav = ({ buttonValid }) => {
  return (
    <GlobalNavContainer>
      <LogoContainer src={logo} />
      <ButtonContainer>
        {buttonValid && <Button_M content={"그룹 만들기"} />}
      </ButtonContainer>
    </GlobalNavContainer>
  );
};

export default GlobalNav;
