import styled from "styled-components";

const ButtonContainer = styled.button`
  /* size=L */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: ${(props) => (props.isLarge ? "400px" : "200px")};
  height: 45px;

  /* black/black_282828 */
  background: #282828;
  border-radius: 6px;
`;

const ButtonText = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.03em;

  /* gray/gray_FAFAFA */
  color: #fafafa;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Button_M = ({ content }) => {
  return (
    <ButtonContainer>
      <ButtonText>{content}</ButtonText>
    </ButtonContainer>
  );
};

export const Button_L = ({ content }) => {
  return (
    <ButtonContainer isLarge={true}>
      <ButtonText>{content}</ButtonText>
    </ButtonContainer>
  );
};
