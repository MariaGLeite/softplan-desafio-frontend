import React, { useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Typography } from '../../assets/common/simpleComponents';

import SearchBar from '../../assets/common/SearchBar';
import { Content } from './InitialPageStyle'
import { useKeyListener } from '../../assets/hooks';

const InitialPage = () => {

  const [shouldRedirectToSearchPage, setShouldRedirectToSearchPage] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleClickSearchBar = useCallback(() => {
    setShouldRedirectToSearchPage(true);
  }, []);

  const handleChangeSearchBar = useCallback(e => setSearchBarValue(e.target.value), []);

  useKeyListener(handleClickSearchBar, ['Enter']);

  return (
    <>
      {shouldRedirectToSearchPage && <Redirect to={`/buscaProcesso/${btoa(searchBarValue)}`}  />}

      <Content>
        <Typography fontColor={props => props.theme.colors.primary}
                    align="center"
                    size="G">
              Busca de Processos
        </Typography>

        <SearchBar 
          placeholder="Pesquise por uma informação do processo" 
          searchBarValue={searchBarValue}
          onClick={handleClickSearchBar}
          onChange={handleChangeSearchBar}/>

        <Typography>
          Você pode criar um novo processo <Link to="/cadastro">clicando aqui</Link>.
        </Typography>

      </Content>
    </>
  );
}

export default InitialPage;