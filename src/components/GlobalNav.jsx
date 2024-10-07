import styled from "styled-components";
import { Button_M } from "./Button";
import logo from "../../public/logo.svg";

const GlobalNavContainer = styled.div`
  position: relative;
  width: 100vh;
`;

const LogoContainer = styled.img`
  position: absolute;
  left: 45%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 3%;
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
