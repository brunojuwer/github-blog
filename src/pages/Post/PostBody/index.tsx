import { useContext } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { IssueContext } from '../../../contexts/IssueContext'
import { PostBodyContainer } from './styles'

export function PostBody() {
  const { issue } = useContext(IssueContext)

  return (
    <PostBodyContainer>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </PostBodyContainer>
  )
}
