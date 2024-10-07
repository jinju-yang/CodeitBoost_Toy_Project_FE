import styled from "styled-components";

const InputTitleContainer = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: -0.03em;

  /* black/black_282828 */
  color: #282828;
`;

const InputTitle = ({ content }) => {
  return <InputTitleContainer>{content}</InputTitleContainer>;
};

export default InputTitle;
