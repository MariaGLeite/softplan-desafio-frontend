import React, { useCallback, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

import SearchBar from "../../assets/common/SearchBar";
import Result from "./Result";
import InspectingProcess from './InspectingProcess';

import { 
  Content, 
  Header, 
  ResultsDiv,
  Results, 
  Loading,
  NoResults
} from "./SearchPageStyle";

import { useComponentDidMount, useKeyListener } from "../../assets/hooks";
import { Typography, Button } from "../../assets/common/simpleComponents";

const SearchPage = () => {
  const [lastSearchedValue, setLastSearchedValue] = useState(null);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [showingResults, setShowingResults] = useState([]);
  const [inspectingProcess, setInspectingProcess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [shouldRedirectToRegisterPage, setShouldRedirectToRegisterPage] = useState(false);
  const [shouldRedirectToSearchPage, setShouldRedirectToSearchPage] = useState(false);

  const { base64SearchValue } = useParams();

  const handleUpdateResults = useCallback(async (isReload = false) => {
    if(!isReload && searchBarValue === lastSearchedValue) return;

    setShouldRedirectToSearchPage(true);
    setLastSearchedValue(searchBarValue);
    setInspectingProcess(null);
    setIsLoading(true);

    await axios
      .get(`http://localhost:3002/processo?q=${searchBarValue}`)
      .then((response) => {
        setShowingResults(response.data);
      }).catch(() => {
        setShowingResults([]);
      });
      
    setShouldRedirectToSearchPage(false);
    setIsLoading(false);
  }, [searchBarValue, lastSearchedValue]);

  const handleClickProcess = useCallback(actualProcess => {
    if(inspectingProcess !== actualProcess) setInspectingProcess(actualProcess);
  }, [inspectingProcess]);

  const handleClickClose = useCallback(() => setInspectingProcess(null), []);
  const handleClickSearchBar = useCallback(() => handleUpdateResults(), [handleUpdateResults]);
  const handleClickNew = useCallback(() => setShouldRedirectToRegisterPage(true), []);
  const handleChangeSearchBar = useCallback((e) => setSearchBarValue(e.target.value), []);

  useComponentDidMount(() => {
    try {
      setSearchBarValue(atob(base64SearchValue));
      setLastSearchedValue(atob(base64SearchValue));

      axios
        .get(`http://localhost:3002/processo?q=${atob(base64SearchValue)}`)
        .then(response => {
          setShowingResults(response.data);
          setIsLoading(false);
        }).catch(() => {
          setShowingResults([]);
          setIsLoading(false);
        });
    } catch(e) {
      // TODO: Redirecionar para página "/inicio".
    }
  });

  useKeyListener(handleUpdateResults, ['Enter']);

  return (
    <>
      {shouldRedirectToRegisterPage && <Redirect to={`/processo`} />}
      {shouldRedirectToSearchPage && <Redirect to={`/buscaProcesso/${btoa(searchBarValue)}`}  />}

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

        <ResultsDiv hasInspectingProcess={inspectingProcess !== null}>
          
          <Results {...{isLoading}}>
            {
              (isLoading && <Loading />) ||
              (
                showingResults.length === 0 && 
                <NoResults>
                  Nada foi encontrado com os parâmetros informados.
                </NoResults>
              ) ||
              (showingResults.map((result, index) => (
                <Result
                  {...{index}}
                  number={result.numero}
                  subject={result.assunto}
                  interest={result.interessados.length > 0 ? result.interessados[0] : null}
                  description={result.descricao}
                  hasInspectingProcess={inspectingProcess !== null}
                  onClick={() => handleClickProcess(result)}
                />
              )))
            }
          </Results>

          {inspectingProcess && 
            <InspectingProcess 
              {...{handleClickClose}} 
              reloadScreen={() => handleUpdateResults(true)} 
              process={inspectingProcess} />
          }
        </ResultsDiv>
      </Content>
    </>
  );
};

export default SearchPage;
