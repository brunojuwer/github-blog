import styled from 'styled-components'

export const PostCardContainer = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  div {
    border-radius: 10px;
    background: ${(props) => props.theme['base-post']};
    padding: 2rem;
    height: 260px;
    cursor: pointer;

    header {
      display: flex;
      justify-content: space-between;
      line-height: 1.6;
      gap: 1rem;

      h3 {
        font-size: 1.25rem;
        font-weight: 500;
      }

      span {
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
        white-space: nowrap;
      }
    }

    main {
      width: 352px;
      height: 112px;
      margin-top: 1rem;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.6;
      font-size: 1.125rem;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`
