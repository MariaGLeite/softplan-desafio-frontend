import React, { useCallback, useState } from 'react';
import {X as CloseImage} from 'react-feather';
import { Redirect, useParams } from 'react-router-dom';

import PrettyInput from './PrettyInput';

import {
  Content,
  MainDiv,
  CloseButton,
  InterestList,
  NewInterest,
  SaveButton
} from './ProcessPageStyle';

import { useComponentDidMount } from '../../assets/hooks';
import { Button, Typography } from '../../assets/common/simpleComponents';
import axios from 'axios';

const emptyString = '';

const ProcessPage = () => {
  const [subject, setSubject] = useState(emptyString);
  const [interestList, setInterestList] = useState([]);
  const [newInterested, setNewInterested] = useState(emptyString);
  const [description, setDescription] = useState(emptyString);

  const [shouldRedirectToRegisterPage, setShouldRedirectToRegisterPage] = useState(false);
  const [shouldRedirectToInitialPage, setShouldRedirectToInitialPage] = useState(false);

  const { base64ProcessId } = useParams();

  const handleChangeSubject = useCallback(e => {
    if(e.target.value.length < 30) setSubject(e.target.value)
  }, []);

  const handleChangeNewInterested = useCallback(e => {
    if(e.target.value.length < 30) setNewInterested(e.target.value)
  }, []);

  const handleChangeDescription = useCallback(e => {
    if(e.target.value.length < 390) setDescription(e.target.value)
  }, []);

  const handleClickAddNewInterested = useCallback(() => {
    if(interestList.length > 5) return;

    if(newInterested.trim()) {
      setInterestList([...interestList, newInterested]);
      setNewInterested(emptyString);
    }
  }, [interestList, newInterested]);

  const handleClickClose = useCallback(() => setShouldRedirectToInitialPage(true), []);

  const handleClickSave = useCallback(() => {
    if(subject.trim() && description.trim() && interestList.length > 0) {
      const objectToSend = {
        assunto: subject,
        descricao: description,
        interessados: interestList
      }
  
      axios.post('http://localhost:3002/processo', objectToSend)
      setShouldRedirectToInitialPage(true);
    }
  }, [subject, description, interestList]);

  useComponentDidMount(() => {
    if(base64ProcessId && Object.keys(base64ProcessId).length > 0) {
      try {
        axios
          .get(`http://localhost:3002/processo/${atob(base64ProcessId)}`)
          .then(response => {
            setSubject(response.data.assunto);
            setInterestList(response.data.interessados);
            setDescription(response.data.descricao);
          }).catch(() => setShouldRedirectToRegisterPage(true));
      } catch(e) {
        setShouldRedirectToRegisterPage(true);
      }
    }
  })

  return (
    <>
      {shouldRedirectToInitialPage && <Redirect to={`/inicio`} /> }
      {shouldRedirectToRegisterPage && <Redirect to={`/processo`} /> }

      <Content>
        <MainDiv>
          <CloseButton onClick={handleClickClose}>
            <CloseImage width='24px' height='24px' color='#696969' />
          </CloseButton>

          <Typography size='M'>Cadastro do processo</Typography>

          <PrettyInput 
            label='Assunto' 
            width="328"
            value={subject}
            onChange={handleChangeSubject} />

          <InterestList>
            <Typography fontColor={props => props.theme.colors.black54} size='S'>Interessados</Typography>
            { interestList.length > 0 && 
              interestList.map((interested, index) => <Typography key={`${interested}${index}`} >{interested}</Typography>)}
            { (interestList.length < 6 && 
              <NewInterest>
                <PrettyInput 
                  width="328"
                  label='Novo interessado'
                  value={newInterested}
                  onChange={handleChangeNewInterested} />
                  
                <Button 
                  borderColor={props => props.theme.colors.black38}
                  backgroundColor={props => props.theme.colors.black38}
                  colorTheme="white"
                  onClick={handleClickAddNewInterested}>
                  ADICIONAR
                </Button>
              </NewInterest>) ||
              <Typography fontColor={props => props.theme.colors.black54}>-- Limite máximo de interessados atingido --</Typography>
            }
            
          </InterestList>

          <PrettyInput
            label='Descricao'
            width="754"
            value={description}
            onChange={handleChangeDescription}
            resizable={true} />

          <SaveButton>
            <Button 
              borderColor={props => props.theme.colors.primary}
              backgroundColor={props => props.theme.colors.primary}
              colorTheme="white"
              onClick={handleClickSave}>SALVAR</Button>
          </SaveButton>
        </MainDiv>
      </Content>
    </>
  );
}

export default ProcessPage;