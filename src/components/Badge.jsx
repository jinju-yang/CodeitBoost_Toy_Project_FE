import React from "react";
import styled from "styled-components";

const BadgeContainer = styled.div`
  /* Auto layout */
  display: inline-flex; /* 변경된 부분: inline-flex로 변경 */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  gap: 10px;

  /* width: 100%; */ /* 제거된 부분: 너비를 고정하지 않음 */
  height: 52px;

  /* gray/gray_F4F4F4 */
  background: #f4f4f4;
  border-radius: 50px;
`;

const BadgeText = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.03em;

  /* black/black_282828 */
  color: #282828;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Badge = ({ content }) => {
  return (
    <BadgeContainer>
      <BadgeText>{content}</BadgeText>
    </BadgeContainer>
  );
};

export default Badge;
