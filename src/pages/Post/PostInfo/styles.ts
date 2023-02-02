import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  margin-top: -100px;
  width: 100%;
  height: 170px;

  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  box-shadow: 0px 2px 41px -11px #141412;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: bold;
      border-bottom: 2px solid transparent;
      line-height: 1.6;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }
  }
`
export const PostTitleContainer = styled.header`
  margin-top: 1rem;
  padding-bottom: 1rem 0;
  h2 {
    font-weight: 500;
  }
`

export const OwnerInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 20px;

  span {
    display: flex;
    gap: 5px;

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
