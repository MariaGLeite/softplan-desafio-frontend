import styled from 'styled-components';

export const Typography = styled.p`
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || props.theme.colors.primaryText};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => 
    (props.size === 'G' && '24') ||
    (props.size === 'M' && '20') ||
    (props.size === 'S' && '14') ||
    '16'
  }px;
`