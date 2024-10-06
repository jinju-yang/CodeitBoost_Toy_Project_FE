import styled from "styled-components";

const TabContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 20px;
  gap: 10px;
  cursor: pointer;
  border-radius: 22.5px;

  /* active 상태와 공개 여부에 따른 배경색 변경 */
  background: ${(props) => (props.active ? "#282828" : "")};
`;

const TabText = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.03em;

  /* 텍스트 색상 설정: 선택 여부에 따라 변경 */
  color: ${(props) => (props.active ? "#FFFFFF" : "#282828")};
`;

const Tab = ({ isPublic, isActive, onClick }) => {
  return (
    <TabContainer active={isActive} isPublic={isPublic} onClick={onClick}>
      <TabText active={isActive}>{isPublic ? "공개" : "비공개"}</TabText>
    </TabContainer>
  );
};

export default Tab;
