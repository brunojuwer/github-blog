import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  margin-top: 5rem;

  div {
    display: flex;
    justify-content: space-between;
    line-height: 1.6;
    padding: 1rem 0;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const FormContainer = styled.form`
  input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
