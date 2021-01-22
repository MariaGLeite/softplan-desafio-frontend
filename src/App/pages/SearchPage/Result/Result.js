import React from 'react';

import NoImage from '../../../assets/images/no_image.png'

import {
  Content,
  Image,
  Grid,
  Line,
  Topic,
  Value
} from './ResultStyle';

const Result = ({number, subject, interest, description}) => {
  return (
    <>
      <Content>
        <Image url={NoImage} />

        <Grid>

          <Line>
            <Topic>Número</Topic>
            <Topic>Assunto</Topic>
            <Topic>Interessado</Topic>
            <Topic>Descrição</Topic>
          </Line>

          <Line>
            <Value>{number}</Value>
            <Value>{subject.length > 25 ? `${subject.substring(0, 25)}...` : subject}</Value>
            <Value>{interest.length > 25 ? `${interest.substring(0, 25)}...` : interest}</Value>
            <Value>{description.length > 25 ? `${description.substring(0, 25)}...` : description}</Value>
          </Line>

        </Grid>
      </Content>
    </>
  );
}

export default Result;