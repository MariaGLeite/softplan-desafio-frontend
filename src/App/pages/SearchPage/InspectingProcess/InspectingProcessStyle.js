import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 530px);
  padding: 16px;

  border: 1px solid ${props => props.theme.colors.black38};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const CloseButton = styled.div`
  position: absolute;
  right: 75px;

  cursor: pointer;
  width: 24px;
  height: 24px;
`

export const DescriptionTitle = styled.p`
  margin-top: 15px;

  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.black54};
`

export const Description = styled.p`
  margin-top: 5px;

  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.black87};
`

export const Buttons = styled.div`
  position: absolute;
  bottom: 55px;
  right: 75px;

  & > button:first-child {
    margin-right: 20px;
  }
`