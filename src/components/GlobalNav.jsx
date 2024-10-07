import styled from "styled-components";
import { Button_M } from "./Button";
import logo from "../../public/logo.svg";

const GlobalNavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 99vw;
`;

const ButtonContainer = styled.div`
  position: absolute;
  left: 83%;
`;

const GlobalNav = ({ buttonValid }) => {
  return (
    <GlobalNavContainer>
      <img src={logo} />
      <ButtonContainer>
        {buttonValid && <Button_M content={"그룹 만들기"} />}
      </ButtonContainer>
    </GlobalNavContainer>
  );
};

export default GlobalNav;
