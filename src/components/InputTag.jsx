import React, { useState } from "react";
import styled from "styled-components";
import InputTitle from "./InputTitle";
import rmvButton from "../../public/icons/icon=x.svg";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputTagContainer = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 45px;
  padding: 13px 20px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  outline: none;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  color: #8d8d8d;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

const InputTag = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  // 태그 추가 핸들러
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]); // 새로운 태그 추가
      setInputValue(""); // 입력 필드 초기화
    }
  };

  // 태그 삭제 핸들러
  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <InputContainer>
      <InputTitle content={"태그"} />
      <InputTagContainer
        type="text"
        placeholder="태그를 입력하고 Enter를 누르세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} // Enter 키 입력 처리
      />
      <TagList>
        {tags.map((tag, index) => (
          <TagItem key={index}>
            #{tag}
            <img src={rmvButton} onClick={() => handleRemoveTag(index)} />
          </TagItem>
        ))}
      </TagList>
    </InputContainer>
  );
};

export default InputTag;
