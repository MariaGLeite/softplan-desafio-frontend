import styled from 'styled-components';

export const Content = styled.div`
  width: calc(100% - 158px);
  height: 108px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;

  border: 1px solid ${props => props.theme.colors.black38};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`

export const Image = styled.div`
  height: 84px;
  width: 84px;
  margin: 12px;

  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Grid = styled.table`

  margin: 30px 12px 26px 4px;
  width: calc(100% - 112px);
  height: calc(100% - 56px);
`

export const Topic = styled.th`
  color: ${props => props.theme.colors.black54};
  size: 14px;
  weight: 700;
`

export const Line = styled.tr`
  text-align: left;
`

export const Value = styled.td`
  color: ${props => props.theme.colors.black87};
  size: 16px;
  weight: 400;

  width: 20%;
`