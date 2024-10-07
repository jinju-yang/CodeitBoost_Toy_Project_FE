import styled from "styled-components";
import searchIcon from "../../public/icons/icon=search.svg";

const SearchContainer = styled.div`
  /* search */

  /* Auto layout */
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;

  width: 1186px;
  height: 45px;

  /* gray/gray_F4F4F4 */
  background: #f4f4f4;
  border-radius: 6px;
  color: #B8B8B8;
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
