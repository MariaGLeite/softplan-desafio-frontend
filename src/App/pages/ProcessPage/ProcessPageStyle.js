import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 88px;

  background-color: ${props => props.theme.colors.background.secoundary};
`

export const CloseButton = styled.div`
  position: absolute;

  margin-left: 900px;

  cursor: pointer;
  width: 24px;
  height: 24px;
`

export const MainDiv = styled.div`
  margin: 0 auto;
  padding: 16px;

  width: 922px;
  height: 470px;

  background-color: ${props => props.theme.colors.background.primary};

  & > p {
    margin-bottom: 28px;
  }
`

export const InterestList = styled.div`
  margin: 20px 0 28px 0;
`

export const NewInterest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-top: 5px;

  & > div {
    margin-right: 20px;
  }
`

export const SaveButton = styled.div`
  position: absolute;
  margin-left: 786px;
  top: 538px;
`