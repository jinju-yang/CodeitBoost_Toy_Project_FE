import { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const sort_option = [
  { id: "최신순", label: "recent" },
  { id: "댓글순", label: "reply" },
  { id: "공감순", label: "like" },
];

const DropDownContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  position: relative; /* SelectContainer 위치를 부모 기준으로 */
`;

const HeahderContainer = styled.div`
  display: inline-flex;
  gap: 50px;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #282828;
  border-radius: 6px;
  cursor: pointer; /* 클릭 가능한 영역으로 설정 */
`;

const SelectContainer = styled.div`
  position: absolute; /* 부모 컨테이너를 기준으로 위치 */
  top: 100%; /* Header 아래에 배치 */
  left: 0;
  z-index: 1; /* 다른 요소보다 위에 보이도록 설정 */
  box-sizing: border-box;
  display: inline-block;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #282828;
  border-radius: 6px;
  width: 100%; /* Header와 동일한 너비 */
`;

const OptionItem = styled.div`
  padding: 5px 0;
  cursor: pointer;
  color: ${(props) => (props.option ? "#282828" : "#8D8D8D")};
  text-align: left;
  &:hover {
    background-color: #f0f0f0;
    color: #282828;
  }
`;

const DropDown = () => {
  const [view, setView] = useState(false);
  const [option, setOption] = useState(sort_option[0].id);

  const handleView = () => {
    setView(!view);
  };

  const handleOptionClick = (id) => {
    setOption(id);
    setView(false);
  };

  return (
    <DropDownContainer>
      <HeahderContainer onClick={handleView}>
        {option}
        {view ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </HeahderContainer>

      {view && (
        <SelectContainer>
          {sort_option.map((element) => (
            <OptionItem
              key={element.id}
              onClick={() => handleOptionClick(element.id)}
            >
              {element.id}
            </OptionItem>
          ))}
        </SelectContainer>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
