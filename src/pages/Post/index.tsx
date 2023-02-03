import { useContext } from 'react'
import { IssueContext } from '../../contexts/IssueContext'
import { PostBody } from './PostBody'
import { PostInfo } from './PostInfo'
import { PostContainer } from './styles'

export function Post() {
  const { issue } = useContext(IssueContext)

  return (
    <PostContainer>
      {issue.title === null ? (
        <h1>Nada foi encontrado</h1>
      ) : (
        <>
          <PostInfo />
          <PostBody />
        </>
      )}
    </PostContainer>
  )
}
