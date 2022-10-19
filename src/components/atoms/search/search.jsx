import React from 'react';
import SearchWrapper, { Label, SearchButton } from './search.styled';
import SearchIcon from '../../../assets/icon/SearchIcon';

const Search = ({ value = '', onChange, onClick }) => {
  return (
    <SearchWrapper>
      <Label htmlFor="searchJob">
        <SearchIcon />
        <input type="search" id="searchJob" onChange={onChange} value={value} />
      </Label>
      <SearchButton onClick={onClick}>Search</SearchButton>
    </SearchWrapper>
  );
};

export default Search;
