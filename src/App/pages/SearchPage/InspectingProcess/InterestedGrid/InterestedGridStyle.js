import styled from 'styled-components';

export const Content = styled.div`
  
`

export const SectionTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.black54};
`

export const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const NoInterest = styled.p`
  display: block;
`

export const Interest = styled.p`
  display: block;
  margin: 5px 0;
  width: 50%;

  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.black87};
`