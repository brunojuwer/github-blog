import styled from 'styled-components'

export const PostBodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  p {
    margin-block: 0.5rem;
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
  }

  h2 {
    margin-block: 2.5rem 1.5rem;
  }

  h3 {
    margin-block: 1.5rem 1rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  ul {
    margin-block: 1rem;
    list-style-position: inside;
    li + li {
      margin-top: 0.5rem;
    }
  }

  img {
    width: 100%;
    margin-block: 1rem;
  }

  pre {
    margin-top: 1rem;
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    border-radius: 10px;
  }

  @media (max-width: 900px) {
    margin-top: -3rem;
    padding: 0.5rem;
  }
`
