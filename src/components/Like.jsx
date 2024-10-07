import styled from "styled-components";
import favicon from "../../public/favicon/size=32_32.svg";

const LikeContainer = styled.div`
  /* like */

  box-sizing: border-box;
  width: 210px;
  height: 52px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 40px;
  gap: 10px;

  /* gray/gray_FAFAFA */
  background: #fafafa;
  /* black/black_282828 */
  border: 1px solid #282828;
  border-radius: 6px;
`;

const Like = () => {
  return (
    <LikeContainer>
      <img src={favicon} />
      {"공감 보내기"}
    </LikeContainer>
  );
};

export default Like;
