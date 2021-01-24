import styled from 'styled-components';

export const Typography = styled.p`
  width: ${props => props.width ? `${props.width}px` : 'fit-content'};
  text-align: ${props => props.align || 'left'};

  color: ${props => props.fontColor || props.theme.colors.black87};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => 
    (props.size === 'G' && '24') ||
    (props.size === 'M' && '20') ||
    (props.size === 'S' && '14') ||
    '16'
  }px;
`

export const Button = styled.button`
  height: ${props => props.height || '36'}px;
  width: 136px;
  cursor: pointer;

  border: 1px solid ${props => props.colorTheme || props.theme.colors.black54};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.colorTheme || props.theme.colors.black54};

  outline: none;
  background-color: ${props => props.theme.colors.background.primary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Image = styled.div`
  height: ${props => props.height || '84'}px;
  width: ${props => props.width || '84'}px;
  margin: ${props => props.margin || '12'}px;

  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`