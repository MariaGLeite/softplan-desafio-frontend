import styled, { keyframes } from 'styled-components';
import LoadingImage from '../../assets/images/loading.png';

export const Content = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  padding-bottom: 31px;

  & > div {
    margin: 0 20px;
  }
`;

export const Results = styled.div`
  height: calc(100% - 160px);
  width: calc(100% - 238px);
  margin: 0 60px 0 178px;

  display: flex;
  flex-flow: column wrap;
  justify-content: ${props => props.isLoading ? 'center' : 'flex-start'};
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  user-select: none;

  height: 100px;
  width: 400px;
  justify-self: center;

  background-image: url(${LoadingImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${rotate} 1s steps(10, end) infinite;
`

export const NoResults = styled.p`
  justify-self: center;

`
