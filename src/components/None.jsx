import styled from "styled-components";
import noAlbum from "../../public/icons/Vector.png";

const NoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8d8d8d;
  gap: 30px;
  margin-bottom: 180px;
  box-sizing: border-box;
`;

export const NoGroup = () => {
  return (
    <NoneContainer>
      <img src={noAlbum} />
      <h2>{"등록된 공개 그룹이 없습니다"}</h2>
      {"가장 먼저 그룹을 만들어보세요!"}
    </NoneContainer>
  );
};

export const NoMemory = () => {
  return (
    <NoneContainer>
      <img src={noAlbum} />
      <h2>{"게시된 추억이 없습니다"}</h2>
      {"첫번째 추억을 올려보세요!"}
    </NoneContainer>
  );
};
