import React from 'react';

import {
  Content,
  Grid,
} from './ProcessHeaderStyle';

import {
  Line,
  Topic,
  Value
} from '../../SearchPageStyle';

import { Image } from '../../../../assets/common/simpleComponents';

const ProcessHeader = ({imageUrl, number, subject, date}) => {
  return (
    <Content>
      <Image margin='0' width='120' height='120' url={imageUrl} />

      <Grid>
        <Line marginBottom='5'>
          <Topic>Processo</Topic>
          <Topic>Data</Topic>
        </Line>

        <Line>
          <Value fontSize='24'>{number}</Value>
          <Value fontSize='24'>{date}</Value>
        </Line>

        <Line marginTop='13' marginBottom='5'>
          <Topic>Assunto</Topic>
        </Line>

        <Line>
          <Value fontSize='24'>{subject}</Value>
        </Line>
      </Grid>
    </Content>
  );
}

export default ProcessHeader;