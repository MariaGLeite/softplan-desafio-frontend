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

export const ResultsDiv = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;

  height: calc(100% - 160px);
  margin: 0 60px 0 178px;

  & > div:first-child {
    width: ${props => props.hasInspectingProcess ? '474px' : 'calc(100% - 218px)'};
  }
`

export const Results = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: ${props => props.isLoading ? 'center' : 'flex-start'};
  max-height: 100%;
  overflow-x: hidden;
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

export const LargeGrid = styled.table`
  margin: 30px 12px 26px 4px;
  border-collapse: collapse;
  border-spacing: 0;
  
  width: calc(100% - 112px);
  height: calc(100% - 56px);
`

export const SimpleGrid = styled(LargeGrid)`
  margin: 12px;
  width: 100%;
`

export const GridBody = styled.tbody``;

export const Topic = styled.th`
  color: ${props => props.theme.colors.black54};
  font-size: 14px;
  font-weight: 700;
`

export const Line = styled.tr`
  text-align: left;

  & > td, & > th {
    padding-left: ${props => props.marginLeft || 0}px;
    padding-right: ${props => props.marginRight || 0}px;
    padding-top: ${props => props.marginTop || 0}px;
    padding-bottom: ${props => props.marginBottom || 0}px;
  }
`

export const Value = styled.td`
  color: ${props => props.theme.colors.black87};
  font-size: ${props => props.fontSize || '16'}px;
  font-weight: 400;

  width: ${props => props.widthPercentage ? `${props.widthPercentage}%` : '20%'};
`