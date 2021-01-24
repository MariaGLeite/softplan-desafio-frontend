import styled from 'styled-components';

export const Input = styled.input`
  margin-top: 11px;
  height: 35px;
  width: 100%;
  border: none;
  outline: none;

  font-size: 16px;
  
  transition: border-bottom-color .2s;
  ${props => props.isLabelSmall && 'border-bottom-color: transparent;'}
`;

export const Textarea = styled.textarea`
  height: ${props => props.height};
  max-height: 100px;
  margin-top: 20px;
  width: ${props => props.width ? `${props.width}px` : '100%'};

  border: none;
  outline: none;
  overflow: hidden;

  font-size: 16px;
  resize: none;
  
  transition: border-bottom-color .2s;
  ${props => props.isLabelSmall && 'border-bottom-color: transparent;'}
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  transition: all .2s;
  
  height: ${props => props.isLabelSmall ? '10px' : '35px'};
  margin-top: ${props => props.isLabelSmall ? '5px' : '11px'};

  color: ${props => props.theme.colors.black54};
  font-size: ${props => props.isLabelSmall ? '12px' : '16px'};

  display: flex;
  align-items: center;
`;
  
export const Bar = styled.span`
  display: block;
  background-color: ${props => props.theme.colors.primary};

  width: 0;
  height: 1px;

  transition: width .2s;
`; 

export const DivInput = styled.div`
  min-height: ${props => props.resizable && props.textAreaParentHeight ? `${props.textAreaParentHeight}px` : '46px'};
  width: ${props => props.width ? `${props.width}px` : '100%'};
  border-bottom: 2px solid ${props => props.theme.colors.black38};

  & ${Input}:hover + ${Bar}, & ${Input}:focus + ${Bar} {
    width: 100%;
  }
`;