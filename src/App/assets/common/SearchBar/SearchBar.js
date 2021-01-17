import React from 'react';

import SearchIcon from './SearchIcon';

import {
  SearchDiv,
  Input
} from './SearchBarStyle';

const SearchBar = ({placeholder}) => {
  return (
    <SearchDiv>
      <Input {...{placeholder}} />
      <SearchIcon />
    </SearchDiv>
  );
}

export default SearchBar;