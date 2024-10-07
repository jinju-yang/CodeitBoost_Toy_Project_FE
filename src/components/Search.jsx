import styled from "styled-components";
import searchIcon from "../../public/icons/icon=search.svg";

const SearchContainer = styled.input`
  /* search */
  /* Auto layout */
  display: flex;
  align-items: center;
  padding: 10px 40px;
  gap: 10px;
  box-sizing: border-box;
  width: 1150px;
  height: 45px;

  /* gray/gray_F4F4F4 */
  background: #f4f4f4;
  border-radius: 6px;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 97%;
  bottom: 25%;
`

const SearchBarContainer = styled.div`
  position: relative;
`

const Search = () => {
  return (
    <SearchBarContainer>
      <SearchContainer placeholder="그룹명을 검색해주세요" />
      <SearchIcon src={searchIcon} />
    </SearchBarContainer>
  );
};

export default Search;
