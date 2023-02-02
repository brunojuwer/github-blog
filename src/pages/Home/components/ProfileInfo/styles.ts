import styled from 'styled-components'

export const ProfileInfoContainer = styled.section`
  margin-top: -100px;
  width: 100%;
  height: 212px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 8px;

  box-shadow: 0px 2px 41px -11px #141412;

  img {
    width: 9.25rem;
    border-radius: 6px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoHeader = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 5px;

    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 12px;
    font-weight: 700;
    border-bottom: solid 2px transparent;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.blue};
    }
  }
`
export const InfoMain = styled.main`
  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
  }
`

export const InfoFooter = styled.footer`
  display: flex;
  gap: 1rem;

  span {
    display: flex;
    gap: 5px;

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
