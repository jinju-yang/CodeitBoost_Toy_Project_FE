import styled from "styled-components";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SquareContainer = styled.div`
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  background: ${(props) => (props.selected ? "#282828" : "#FAFAFA")};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#282828")};
  border: 1px solid #b8b8b8;
  border-radius: 6px;
  flex: none;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

const NumContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Square = ({ content, selected, onClick }) => {
  return (
    <SquareContainer selected={selected} onClick={onClick}>
      {content}
    </SquareContainer>
  );
};

const Pagination = () => {
  const [selected, setSelected] = useState(1);
  const totalPages = 5; // 총 페이지 수

  const handleSelected = (page) => {
    setSelected(page); // 클릭된 페이지 번호로 상태 업데이트
  };

  const handleLeftArrowClick = () => {
    if (selected > 1) {
      setSelected(selected - 1); // 현재 선택된 페이지가 1보다 클 때만 이동
    }
  };

  const handleRightArrowClick = () => {
    if (selected < totalPages) {
      setSelected(selected + 1); // 현재 선택된 페이지가 총 페이지 수보다 작을 때만 이동
    }
  };

  return (
    <PaginationContainer>
      <Square content={<IoMdArrowDropleft />} onClick={handleLeftArrowClick} />
      <NumContainer>
        {[1, 2, 3, 4, 5].map((num) => (
          <Square
            key={num}
            content={num}
            selected={selected === num}
            onClick={() => handleSelected(num)}
          />
        ))}
      </NumContainer>
      <Square
        content={<IoMdArrowDropright />}
        onClick={handleRightArrowClick}
      />
    </PaginationContainer>
  );
};

export default Pagination;
