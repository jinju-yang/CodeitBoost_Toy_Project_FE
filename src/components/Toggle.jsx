import styled from "styled-components";
import { useState } from "react";

const Ellipse = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: ${(props) => (props.active ? "50%" : "0%")};
  right: ${(props) => (props.active ? "0%" : "50%")};
  top: 0%;
  bottom: 0%;
  border-radius: 50%;
  background: #fafafa;
  border: ${(props) =>
    props.active ? "1px solid #282828" : "1px solid #b8b8b8"};
`;

const Rectangle = styled.div`
  width: 48px;
  height: 24px;
  position: relative;
  background: ${(props) => (props.active ? "#282828" : "#b8b8b8")};
  border-radius: 15px;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const TextContainer = styled.div`
  width: 48px;
`;

const Toggle = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <ToggleContainer>
      <TextContainer>{active ? "공개" : "비공개"}</TextContainer>
      <Rectangle active={active}>
        <Ellipse active={active} onClick={handleToggle} />
      </Rectangle>
    </ToggleContainer>
  );
};

export default Toggle;
