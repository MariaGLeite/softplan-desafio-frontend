import styled from 'styled-components';

export const Content = styled.div`
  width: calc(100% - 10px);
  height: 108px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;

  border: 1px solid ${props => props.theme.colors.black38};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`