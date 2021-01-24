import React from 'react';

import {
  Content,
  SectionTitle,
  List,
  NoInterest,
  Interest
} from './InterestedGridStyle';

const InterestedGrid = ({interest}) => {
  return (
    <Content>
      <SectionTitle>Interessados</SectionTitle>
      
      <List>
        {(!interest && <NoInterest />) ||
          interest.map( interested => <Interest>{interested}</Interest> )}
      </List>
    </Content>
  );
}

export default InterestedGrid;