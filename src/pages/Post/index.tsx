import { PostBody } from './PostBody'
import { PostInfo } from './PostInfo'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <PostBody />
    </PostContainer>
  )
}
