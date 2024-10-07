import styled from "styled-components";

const MoreContainer = styled.div`
  /* more */
  box-sizing: border-box;
  width: 1560px;
  height: 60px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  text-align: center;

  /* black/black_282828 */
  color: #282828;
`;

const More = () => {
  return (
    <MoreContainer>
      <MoreTextContainer>{"더보기"}</MoreTextContainer>
    </MoreContainer>
  );
};

export default More;
