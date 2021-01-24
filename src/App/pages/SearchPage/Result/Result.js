import React from 'react';

import NoImage from '../../../assets/images/no_image.png'
import { Image } from '../../../assets/common/simpleComponents'

import {
  Content
} from './ResultStyle';

import {
  LargeGrid,
  SimpleGrid,
  Line,
  Topic,
  Value,
  GridBody,
} from '../SearchPageStyle';

const Result = ({number, subject, interest, description, index, hasInspectingProcess, onClick}) => {
  return (
    <>
      <Content key={index} {...{hasInspectingProcess, onClick}}>
        { (hasInspectingProcess && 
          <SimpleGrid>
            <GridBody>
              <Line>
                <Topic>Número</Topic>
                <Topic>Assunto</Topic>
              </Line>

              <Line>
                <Value widthPercentage='50'>{number}</Value>
                <Value widthPercentage='50'>{subject.length > 25 ? `${subject.substring(0, 25)}...` : subject}</Value>
              </Line>

              <Line marginTop='10'>
                <Topic>Interessado</Topic>
              </Line>

              <Line>
                <Value widthPercentage='50'>{interest.length > 25 ? `${interest.substring(0, 25)}...` : interest}</Value>
              </Line>
            </GridBody>
          </SimpleGrid>) ||

          <>
            <Image url={NoImage} />
            <LargeGrid>
              <GridBody>
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
              </GridBody>
            </LargeGrid>
          </>
        }
      </Content>
    </>
  );
}

export default Result;