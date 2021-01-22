import React from 'react';
import { Search } from 'react-feather';

import { IconsPosition } from './SearchIconStyle';

const SearchIcon = ({onClick}) => {
  return (
    <IconsPosition {...{onClick}} >
      <Search height="18px" width="18px" />
    </IconsPosition>
  );
}

export default SearchIcon;