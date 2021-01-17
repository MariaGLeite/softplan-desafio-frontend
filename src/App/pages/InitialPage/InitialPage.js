import React, { useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Typography } from '../../assets/common/simpleComponents';

import SearchBar from '../../assets/common/SearchBar';
import { Content } from './InitialPageStyle'

const InitialPage = () => {

  const [shouldRedirectToSearchPage, setShouldRedirectToSearchPage] = useState(false);
  const handleChangeSearchBar = useCallback(() => setShouldRedirectToSearchPage(true), []);

  return (
    <>
      {shouldRedirectToSearchPage && <Redirect to="/searchPage" />}

      <Content>
        <Typography color={props => props.theme.colors.secoundaryText}
                    align="center"
                    size="G">
              Busca de Processos
        </Typography>

        <SearchBar 
          placeholder="Pesquise por uma informação do processo" 
          onChange={handleChangeSearchBar}/>

        <Typography>
          Você pode criar um novo processo <Link to="/cadastro">clicando aqui</Link>.
        </Typography>

      </Content>
    </>
  );
}

export default InitialPage;