import styled from 'styled-components';

export const IconsPosition = styled.div`
  position: relative;
  top: -35px;
  left: 95%;

  height: fit-content;
  width: fit-content;
  z-index: 2;

  color: ${props => props.theme.colors.darkGray};
  cursor: pointer;
}
`