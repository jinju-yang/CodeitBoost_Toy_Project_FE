import { useState } from "react";
import styled from "styled-components";
import InputTitle from "./InputTitle.jsx";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 45px;
  gap: 10px;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background: #fafafa;
  color: #282828;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  width: 100px;
  border: 1px solid black;
  text-align: center;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const SelectedFileName = styled.span`
  font-size: 14px;
  color: #666;
  width: 290px;
  padding: 10px 20px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
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
          {selectedFile ? selectedFile : "파일을 선택해주세요"}
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
