import React, { useCallback, useState } from 'react';
import {X as CloseImage} from 'react-feather';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import NoImage from '../../../assets/images/no_image.png'
import ProcessHeader from './ProcessHeader';
import InterestGrid from './InterestedGrid';

import {
  Content,
  CloseButton,
  DescriptionTitle,
  Description,
  Buttons
} from './InspectingProcessStyle';

import { Button } from '../../../assets/common/simpleComponents';

const InspectingProcess = ({reloadScreen, process, handleClickClose}) => {
  const [shouldRedirectToEditPage, setShouldRedirectToEditPage] = useState(false);

  const handleClickRemove = useCallback(async () => {
    await axios.delete(`http://localhost:3002/processo/${process.id}`);
    reloadScreen();
  }, [reloadScreen, process]);

  const handleClickEdit = useCallback(() =>  setShouldRedirectToEditPage(true), []);

  return (
    <>
      {shouldRedirectToEditPage && <Redirect to={`/processo/${btoa(process.id)}`} />}

      <Content> 

        <CloseButton onClick={handleClickClose}>
          <CloseImage width='24px' height='24px' color='#696969' />
        </CloseButton>

        <ProcessHeader
          imageUrl={NoImage}
          number={process.numero}
          date={process.entrada}
          subject={process.assunto} />

        <InterestGrid interest={process.interessados} />

        <DescriptionTitle>Descrição</DescriptionTitle>
        <Description>
          {process.descricao}
        </Description>

        <Buttons>
          <Button onClick={handleClickRemove}>REMOVER</Button>
          <Button onClick={handleClickEdit} colorTheme={props => props.theme.colors.primary}>EDITAR</Button>
        </Buttons>
      </Content>
    </>
  );
}

export default InspectingProcess;