import styled from "styled-components";
import searchIcon from "../../public/icons/icon=search.svg";

const SearchContainer = styled.div`
  /* search */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;

  width: 3025px;
  height: 45px;

  /* gray/gray_F4F4F4 */
  background: #f4f4f4;
  border-radius: 6px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <img src={searchIcon} />
      {"그룹명을 검색해주세요 "}
    </SearchContainer>
  );
};

export default Search;
