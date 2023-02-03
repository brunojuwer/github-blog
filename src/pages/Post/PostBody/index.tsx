import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { IssueContext } from '../../../contexts/IssueContext'
import { PostBodyContainer } from './styles'

export function PostBody() {
  const { issue } = useContext(IssueContext)

  return (
    <PostBodyContainer>
      {issue.body === '' ? (
        <h1>Escolha a issue</h1>
      ) : (
        <ReactMarkdown linkTarget="_blank">{issue.body}</ReactMarkdown>
      )}
    </PostBodyContainer>
  )
}
