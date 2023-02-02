import styled from 'styled-components'

export const HeaderContainer = styled.header`
  text-align: center;
  background-color: ${(props) => props.theme['base-profile']};
  height: 250px;
  width: 100vw;
  img {
    margin-top: 20px;
  }
`
