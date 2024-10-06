import { useState } from "react";
import styled from "styled-components";
import InputTitle from "./InputTitle";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background: #282828;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #1b1b1b;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const SelectedFileName = styled.span`
  font-size: 14px;
  color: #666;
`;

const InputImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  return (
    <InputContainer>
      <InputTitle content={"대표 이미지"} />
      <FileInputContainer>
        <SelectedFileName>
          {selectedFile ? selectedFile : "선택된 파일 없음"}
        </SelectedFileName>
        <FileInputLabel htmlFor="fileInput">파일 선택</FileInputLabel>
        <HiddenFileInput
          id="fileInput"
          type="file"
          accept="image/*" // 이미지 파일 형식만 허용
          onChange={handleFileChange}
        />
      </FileInputContainer>
    </InputContainer>
  );
};

export default InputImage;
