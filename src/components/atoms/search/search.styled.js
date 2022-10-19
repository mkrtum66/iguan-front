import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  background: var(--background-white);
  border: 1px solid var(--border-green);
  border-radius: 8px;
  padding: 4px 4px 4px 46px;
`;
export const Label = styled.label`
  width: calc(100% - 103px);
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    box-shadow: none;
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }
`;

export const SearchButton = styled.button`
  background: #6ebd44;
  border-radius: 8px;
  padding: 9px 26px;
  text-transform: capitalize;
  border: none;
  outline: none;
  box-shadow: none;
  color: var(--text-white);
`;

export default SearchWrapper;
