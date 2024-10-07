import styled from "styled-components";
import flowerImg from "../assets/images/Rectangle 19.png";
import flowerIllust from "../../public/favicon/size=64_64.svg";
import favicon from "../../public/favicon/size=16_16.svg";

const CardContainer = styled.div`
  /* gray/gray_FAFAFA */
  box-sizing: border-box;
  background: #fafafa;
  width: 375px;
  height: ${(props) => (props.isPrivate ? "156px" : "561px")};
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* gray/gray_DDDDDD */
  border: 1px solid #dddddd;
  border-radius: 12px;
  gap: 20px;
`;

const CardIllustContainer = styled.div`
  background: #efede4;
  box-sizing: border-box;
  width: 335px;
  height: 335px;
  padding: 130px;
  border-radius: 6px;
`;
const CardTopContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const CardTop = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: -0.03em;

  /* black/black_282828 */
  color: ${(props) => (props.isLeft ? "#282828" : "#8d8d8d")};

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FirstDiv = styled.div`
  color: #b8b8b8;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const CardMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CardMiddle = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
  /* black/black_282828 */
  color: #282828;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const CardLabelContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const CardBottom = styled.div`
  color: ${(props) => (props.isLabel ? "#b8b8b8" : "#282828")};
  font-family: "Spoqa Han Sans Neo";
  font-size: ${(props) => (props.isLabel ? "12px" : "14px")};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  box-sizing: border-box;
`;
const cardInfo = [
  { content: "달봉이네 가족", label: "groupName" },
  { content: 265, label: "dDay" },

  { content: "에델바이스", label: "title" },
  {
    content: "서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.",
    label: "text",
  },
  { content: 2, label: "badge" },
  { content: 8, label: "memory" },
  { content: 1500, label: "like" },
];

const formatNumber = (number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K"; // 1000 이상일 때 K로 변환
  }
  return number.toString(); // 1000 미만일 때 그대로 출력
};

export const CardPublic = () => {
  return (
    <CardContainer>
      <img src={flowerImg} />{" "}
      <CardTopContainer>
        {cardInfo.find((item) => item.label === "dDay") && (
          <CardTop isLeft={true}>
            <strong>
              {"+"}
              {cardInfo.find((item) => item.label === "dDay").content}
            </strong>
          </CardTop>
        )}
        <CardTop>|</CardTop>
        <CardTop>공개</CardTop>
      </CardTopContainer>
      <CardMiddleContainer>
        {cardInfo.find((item) => item.label === "title") && (
          <CardMiddle>
            <strong>
              {cardInfo.find((item) => item.label === "title").content}
            </strong>
            <div>{cardInfo.find((item) => item.label === "text").content}</div>
          </CardMiddle>
        )}
      </CardMiddleContainer>
      <CardLabelContainer>
        <CardBottom>
          <FirstDiv>{"획득 배지"}</FirstDiv>
          {cardInfo.find((item) => item.label === "badge").content}
        </CardBottom>
        <CardBottom>
          <FirstDiv>{"추억"}</FirstDiv>
          {cardInfo.find((item) => item.label === "memory").content}
        </CardBottom>
        <CardBottom>
          <FirstDiv>{"공감"}</FirstDiv>
          <div>
            <img src={favicon} />
            {formatNumber(
              cardInfo.find((item) => item.label === "like").content
            )}
          </div>
        </CardBottom>
      </CardLabelContainer>
    </CardContainer>
  );
};

export const CardIllust = () => {
  return (
    <CardContainer>
      <CardIllustContainer>
        <img src={flowerIllust} />
      </CardIllustContainer>
      <CardTopContainer>
        {cardInfo.find((item) => item.label === "dDay") && (
          <CardTop isLeft={true}>
            <strong>
              {"+"}
              {cardInfo.find((item) => item.label === "dDay").content}
            </strong>
          </CardTop>
        )}
        <CardTop>|</CardTop>
        <CardTop>공개</CardTop>
      </CardTopContainer>
      <CardMiddleContainer>
        {cardInfo.find((item) => item.label === "title") && (
          <CardMiddle>
            <strong>
              {cardInfo.find((item) => item.label === "title").content}
            </strong>
            <div>{cardInfo.find((item) => item.label === "text").content}</div>
          </CardMiddle>
        )}
      </CardMiddleContainer>
      <CardLabelContainer>
        <CardBottom>
          <FirstDiv>{"획득 배지"}</FirstDiv>
          {cardInfo.find((item) => item.label === "badge").content}
        </CardBottom>
        <CardBottom>
          <FirstDiv>{"추억"}</FirstDiv>
          {cardInfo.find((item) => item.label === "memory").content}
        </CardBottom>
        <CardBottom>
          <FirstDiv>{"그룹 공감"}</FirstDiv>
          <div>
            <img src={favicon} />
            {formatNumber(
              cardInfo.find((item) => item.label === "like").content
            )}
          </div>
        </CardBottom>
      </CardLabelContainer>
    </CardContainer>
  );
};

export const CardPrivate = ({ isPrivate }) => {
  return (
    <CardContainer isPrivate={true}>
      <CardTopContainer>
        {cardInfo.find((item) => item.label === "dDay") && (
          <CardTop isLeft={true}>
            <strong>
              {"+"}
              {cardInfo.find((item) => item.label === "dDay").content}
            </strong>
          </CardTop>
        )}
        <CardTop>|</CardTop>
        <CardTop>비공개</CardTop>
      </CardTopContainer>
      <div>
        <CardMiddle>
          <strong>
            {cardInfo.find((item) => item.label === "groupName").content}
          </strong>
        </CardMiddle>
      </div>
      <CardLabelContainer>
        <CardBottom>
          <FirstDiv>{"추억"}</FirstDiv>
          {cardInfo.find((item) => item.label === "memory").content}
        </CardBottom>
        <CardBottom>
          <FirstDiv>{"그룹 공감"}</FirstDiv>
          <div>
            <img src={favicon} />
            {formatNumber(
              cardInfo.find((item) => item.label === "like").content
            )}
          </div>
        </CardBottom>
      </CardLabelContainer>
    </CardContainer>
  );
};
