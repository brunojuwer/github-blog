import { useContext } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'
import { IssueContext } from '../../../../contexts/IssueContext'
import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function PostCard() {
  const navigate = useNavigate()

  const { issues, addIssueToPost, filteredIssues, input } =
    useContext(IssueContext)

  function handleOpenPost(id: number) {
    addIssueToPost(id)
    navigate('/post')
  }

  return (
    <PostCardContainer>
      {filteredIssues.length ? (
        filteredIssues.map((issue) => {
          return (
            <div onClick={() => handleOpenPost(issue.id)} key={issue.id}>
              <header>
                <h3>{issue.title}</h3>
                <span>
                  {formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>
              <main>
                <ReactMarkdown>{issue.body}</ReactMarkdown>
              </main>
            </div>
          )
        })
      ) : !input ? (
        issues.map((issue) => {
          return (
            <div onClick={() => handleOpenPost(issue.id)} key={issue.id}>
              <header>
                <h3>{issue.title}</h3>
                <span>
                  {formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>
              <main>
                <ReactMarkdown>{issue.body}</ReactMarkdown>
              </main>
            </div>
          )
        })
      ) : (
        <h1>Nada Encontrado</h1>
      )}
    </PostCardContainer>
  )
}
