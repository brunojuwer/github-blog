import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './styles'

export function PostCard() {
  const navigate = useNavigate()

  function handleOpenPost() {
    navigate('/post')
  }
  return (
    <PostCardContainer>
      <div onClick={handleOpenPost}>
        <header>
          <h3>JavaScript data types and data structures</h3>
          <span>Há 1 dia</span>
        </header>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available sinavaScript and what
          properties they have. These can be used to build other data
          structures.
        </p>
      </div>
      <div onClick={handleOpenPost}>
        <header>
          <h3>JavaScript data types and data structures</h3>
          <span>Há 1 dia</span>
        </header>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available inavaScript and what
          properties they have. These can be used to build other data
          structures.
        </p>
      </div>
    </PostCardContainer>
  )
}
