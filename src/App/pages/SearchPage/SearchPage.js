import React, { useCallback, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

import SearchBar from "../../assets/common/SearchBar";
import Result from "./Result";
import { Typography, Button } from "../../assets/common/simpleComponents";

import { 
  Content, 
  Header, 
  Results, 
  Loading,
  NoResults
} from "./SearchPageStyle";

import { useComponentDidMount, useKeyListener } from "../../assets/hooks";

const SearchPage = () => {
  const [lastSearchedValue, setLastSearchedValue] = useState(null);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [shouldRedirectToRegisterPage, setShouldRedirectToRegisterPage] = useState(false);
  const [showingResults, setShowingResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { base64SearchValue } = useParams();

  const handleUpdateResults = useCallback(() => {
    if(searchBarValue === lastSearchedValue) return;

    setLastSearchedValue(searchBarValue);
    setIsLoading(true);

    axios
      .get(`http://localhost:3002/processo?q=${searchBarValue}`)
      .then((response) => {
        setShowingResults(response.data);
        setIsLoading(false);
      }).catch(() => {
        setShowingResults([]);
        setIsLoading(false);
      });
      
  }, [searchBarValue, lastSearchedValue]);

  const handleClickSearchBar = useCallback(() => handleUpdateResults(), [handleUpdateResults]);
  const handleClickNew = useCallback(() => setShouldRedirectToRegisterPage(true), []);
  const handleChangeSearchBar = useCallback((e) => setSearchBarValue(e.target.value), []);

  useComponentDidMount(async () => {
    setSearchBarValue(atob(base64SearchValue));
    handleUpdateResults();
  });

  useKeyListener(handleUpdateResults, ['Enter']);

  return (
    <>
      {shouldRedirectToRegisterPage && <Redirect to={`/cadastro}`} />}

      <Content>
        <Header>
          <Typography
            fontColor={(props) => props.theme.colors.black87}
            width="118"
            size="M"
          >
            Busca de processos
          </Typography>

          <SearchBar
            placeholder="Pesquise por uma informação do processo"
            searchBarValue={searchBarValue}
            onClick={handleClickSearchBar}
            onChange={handleChangeSearchBar}
          />

          <Button height="50" onClick={handleClickNew}>
            NOVO
          </Button>
        </Header>

        <Results {...{isLoading}}>
          {
            (isLoading && <Loading />) ||
            (
              showingResults.length === 0 && 
              <NoResults>
                Nada foi encontrado com os parâmetros informados.
              </NoResults>
            ) ||
            (showingResults.map((result) => (
              <Result
                number={result.numero}
                subject={result.assunto}
                interest={result.interessados.length > 0 ? result.interessados[0] : null}
                description={result.descricao}
              />
            )))
          }
        </Results>
      </Content>
    </>
  );
};

export default SearchPage;
