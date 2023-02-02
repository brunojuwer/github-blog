import axios from 'axios'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './styles'

interface IssueType {
  id: number
  title: string
  body: string
}

export function PostCard() {
  const navigate = useNavigate()
  const url = 'https://api.github.com/repos/brunojuwer/todo-prisma-node/issues'
  const [issues, setIssues] = useState<IssueType[]>([])

  async function loadIssues() {
    const response = await axios.get(url)
    setIssues(response.data)
  }

  useEffect(() => {
    loadIssues()
  }, [])

  function handleOpenPost() {
    navigate('/post')
  }
  return (
    <PostCardContainer>
      {issues.map((issue) => {
        return (
          <div onClick={handleOpenPost} key={issue.id}>
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
