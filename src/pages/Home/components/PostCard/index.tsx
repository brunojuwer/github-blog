import { useContext } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'
import { IssueContext } from '../../../../contexts/IssueContext'
import { PostCardContainer } from './styles'
export function PostCard() {
  const navigate = useNavigate()

  const { issues, addIssueToPost } = useContext(IssueContext)

  function handleOpenPost(id: number) {
    addIssueToPost(id)
    navigate('/post')
  }

  return (
    <PostCardContainer>
      {issues.map((issue) => {
        return (
          <div onClick={() => handleOpenPost(issue.id)} key={issue.id}>
            <header>
              <h3>{issue.title}</h3>
              <span>Há 1 dia</span>
            </header>
            <main>
              <ReactMarkdown>{issue.body}</ReactMarkdown>
            </main>
          </div>
        )
      })}
    </PostCardContainer>
  )
}
