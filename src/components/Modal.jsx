import styled from "styled-components";
import { Button_M } from "./Button";

const ModalContainer = styled.div`
  /* gray/gray_FAFAFA */
  background: #fafafa;
  border-radius: 6px;
  width: 480px;
  height: 298px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

const ModalTitleContainer = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.03em;

  /* black/black_282828 */
  color: #282828;
`;
const ModalTextContainer = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.03em;

  /* black/black_282828 */
  color: #282828;
`;

const Modal = ({ modalTitle, modalContent }) => {
  return (
    <ModalContainer>
      <ModalTitleContainer>{modalTitle}</ModalTitleContainer>
      <ModalTextContainer>{modalContent}</ModalTextContainer>
      <Button_M content={"확인"} />
    </ModalContainer>
  );
};

export default Modal;
