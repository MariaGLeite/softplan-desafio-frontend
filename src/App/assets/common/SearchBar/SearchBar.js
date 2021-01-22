import React from 'react';

import SearchIcon from './SearchIcon';

import {
  SearchDiv,
  Input
} from './SearchBarStyle';

const SearchBar = ({placeholder, searchBarValue, onChange, onClick}) => {
  return (
    <SearchDiv>
      <Input value={searchBarValue} {...{placeholder, onChange}} />
      <SearchIcon {...{onClick}} />
    </SearchDiv>
  );
}

export default SearchBar;