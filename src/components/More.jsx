import styled from "styled-components";

const MoreContainer = styled.div`
  /* more */
  box-sizing: border-box;
  
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 21px 761px;
  gap: 10px;

  /* gray/gray_FAFAFA */
  background: #fafafa;
  /* black/black_282828 */
  border: 1px solid #282828;
  border-radius: 6px;
`;

const MoreTextContainer = styled.div`
  /* 더보기 */
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.03em;

  /* black/black_282828 */
  color: #282828;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const More = () => {
  return (
    <MoreContainer>
      <MoreTextContainer>{"더보기"}</MoreTextContainer>
    </MoreContainer>
  );
};

export default More;
